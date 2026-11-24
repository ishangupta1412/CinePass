const pending = readJSON(STORAGE.pending, null);
let paymentMethod = "card";

function setError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const errorBox = document.getElementById(errorId);
  if (errorBox) {
    errorBox.textContent = message;
  }
  if (field) {
    field.classList.toggle("invalid", message !== "");
  }
}

function clearErrors() {
  setError("fullName", "errName", "");
  setError("phone", "errPhone", "");
  setError("email", "errEmail", "");
  setError("cardNumber", "errCard", "");
  setError("expiry", "errExpiry", "");
  setError("cvv", "errCvv", "");
  setError("upiId", "errUpi", "");
  setError("bankName", "errBank", "");
}

function startCheckout() {
  const movie = getMovie(pending.movieId);

  if (!movie) {
    window.location.href = "index.html";
    return;
  }

  const miniPoster = document.getElementById("miniPoster");
  const miniTitle = document.getElementById("miniTitle");
  const miniMeta = document.getElementById("miniMeta");
  const miniShow = document.getElementById("miniShow");
  const sumDate = document.getElementById("sumDate");
  const sumTheatre = document.getElementById("sumTheatre");
  const sumSeats = document.getElementById("sumSeats");
  const sumQty = document.getElementById("sumQty");
  const sumSubtotal = document.getElementById("sumSubtotal");
  const sumFee = document.getElementById("sumFee");
  const sumTotal = document.getElementById("sumTotal");
  const backToSeats = document.getElementById("backToSeats");
  const paymentForm = document.getElementById("paymentForm");
  const confirmBtn = document.getElementById("confirmBtn");

  const fullName = document.getElementById("fullName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const cardNumber = document.getElementById("cardNumber");
  const expiry = document.getElementById("expiry");
  const cvv = document.getElementById("cvv");
  const upiId = document.getElementById("upiId");
  const bankName = document.getElementById("bankName");

  function renderSummary() {
    const seatCount = pending.seats.length;
    const subtotal = pending.total;
    const fee = seatCount * CONVENIENCE_FEE;

    miniPoster.src = movie.poster;
    miniPoster.alt = movie.title + " poster";
    miniTitle.textContent = movie.title;
    miniMeta.textContent = movie.genre + " \u00B7 " + movie.language + " \u00B7 " + movie.duration;
    miniShow.textContent = pending.time + " \u00B7 " + pending.theatre;
    sumDate.textContent = formatDateLong(pending.date);
    sumTheatre.textContent = pending.theatre;
    sumQty.textContent = seatCount;
    sumSubtotal.textContent = formatCurrency(subtotal);
    sumFee.textContent = formatCurrency(fee);
    sumTotal.textContent = formatCurrency(subtotal + fee);
    backToSeats.href = "booking.html?movie=" + encodeURIComponent(movie.id);

    sumSeats.innerHTML = "";
    pending.seats.forEach(function (seat) {
      const tag = document.createElement("span");
      tag.className = "seat-tag";
      tag.textContent = seat.id;
      sumSeats.appendChild(tag);
    });
  }

  function validateForm() {
    let valid = true;

    if (fullName.value.trim().length < 3) {
      setError("fullName", "errName", "Please enter your full name");
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone.value.trim())) {
      setError("phone", "errPhone", "Enter a valid 10 digit mobile number");
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
      setError("email", "errEmail", "Enter a valid email address");
      valid = false;
    }

    if (paymentMethod === "card") {
      const digits = cardNumber.value.replace(/\s/g, "");
      if (!/^[0-9]{16}$/.test(digits)) {
        setError("cardNumber", "errCard", "Card number must be 16 digits");
        valid = false;
      }
      if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry.value)) {
        setError("expiry", "errExpiry", "Use MM/YY format");
        valid = false;
      }
      if (!/^[0-9]{3}$/.test(cvv.value)) {
        setError("cvv", "errCvv", "CVV must be 3 digits");
        valid = false;
      }
    }

    if (paymentMethod === "upi") {
      if (!/^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/.test(upiId.value.trim())) {
        setError("upiId", "errUpi", "Enter a valid UPI ID like name@bank");
        valid = false;
      }
    }

    if (paymentMethod === "netbanking") {
      if (bankName.value.trim().length < 3) {
        setError("bankName", "errBank", "Please enter your bank name");
        valid = false;
      }
    }

    return valid;
  }

  function generatePnr() {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const existing = getBookings();
    let pnr = "";

    do {
      pnr = "CP";
      for (let i = 0; i < 6; i++) {
        pnr += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while (existing.some(function (item) { return item.pnr === pnr; }));

    return pnr;
  }

  function saveBooking() {
    const fee = pending.seats.length * CONVENIENCE_FEE;
    const booking = {
      pnr: generatePnr(),
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster,
      genre: movie.genre,
      language: movie.language,
      duration: movie.duration,
      date: pending.date,
      theatre: pending.theatre,
      time: pending.time,
      seats: pending.seats.map(function (seat) { return seat.id; }),
      subtotal: pending.total,
      fee: fee,
      amount: pending.total + fee,
      customer: {
        name: fullName.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim()
      },
      method: paymentMethod,
      createdAt: new Date().toISOString()
    };

    const bookings = getBookings();
    bookings.push(booking);
    saveBookings(bookings);

    const showKey = getShowKey(movie.id, pending.date, pending.theatre, pending.time);
    const bookedMap = getBookedMap();
    const savedSeats = bookedMap[showKey] || [];
    bookedMap[showKey] = Array.from(new Set(savedSeats.concat(booking.seats)));
    saveBookedMap(bookedMap);

    localStorage.removeItem(STORAGE.pending);
    return booking;
  }

  document.querySelectorAll(".pay-option").forEach(function (option) {
    option.addEventListener("click", function () {
      document.querySelectorAll(".pay-option").forEach(function (item) {
        item.classList.remove("active");
      });
      option.classList.add("active");
      paymentMethod = option.dataset.method;

      document.getElementById("cardPanel").classList.toggle("active", paymentMethod === "card");
      document.getElementById("upiPanel").classList.toggle("active", paymentMethod === "upi");
      document.getElementById("netbankingPanel").classList.toggle("active", paymentMethod === "netbanking");
      clearErrors();
    });
  });

  cardNumber.addEventListener("input", function () {
    const digits = cardNumber.value.replace(/\D/g, "").slice(0, 16);
    cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  });

  expiry.addEventListener("input", function () {
    let digits = expiry.value.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) {
      digits = digits.slice(0, 2) + "/" + digits.slice(2);
    }
    expiry.value = digits;
  });

  phone.addEventListener("input", function () {
    phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
  });

  cvv.addEventListener("input", function () {
    cvv.value = cvv.value.replace(/\D/g, "").slice(0, 3);
  });

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    if (!validateForm()) {
      showToast("Please correct the highlighted details", "error");
      const firstInvalid = paymentForm.querySelector("input.invalid");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    confirmBtn.disabled = true;
    confirmBtn.textContent = "Processing Payment...";

    setTimeout(function () {
      const booking = saveBooking();
      window.location.href = "ticket.html?pnr=" + encodeURIComponent(booking.pnr);
    }, 900);
  });

  renderSummary();
}

if (!pending || !pending.seats || pending.seats.length === 0) {
  window.location.href = "index.html";
} else {
  startCheckout();
}
