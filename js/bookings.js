const bookingList = document.getElementById("bookingList");
const bookingsCaption = document.getElementById("bookingsCaption");
const bookingCount = document.getElementById("bookingCount");

function renderBookings() {
  const bookings = getBookings().slice().reverse();
  bookingList.innerHTML = "";
  bookingCount.textContent = bookings.length;

  if (bookings.length === 0) {
    bookingsCaption.textContent = "You have not booked any tickets yet";
    const empty = document.createElement("div");
    empty.className = "empty-state";

    const heading = document.createElement("h3");
    heading.textContent = "No bookings yet";

    const text = document.createElement("p");
    text.textContent = "Pick a movie and your tickets will appear here.";

    const link = document.createElement("a");
    link.className = "btn btn-primary btn-sm";
    link.href = "index.html#movies";
    link.textContent = "Browse Movies";

    empty.appendChild(heading);
    empty.appendChild(text);
    empty.appendChild(link);
    bookingList.appendChild(empty);
    return;
  }

  bookingsCaption.textContent = bookings.length + " active " + (bookings.length === 1 ? "booking" : "bookings");

  bookings.forEach(function (booking) {
    const card = document.createElement("article");
    card.className = "booking-card";

    const poster = document.createElement("img");
    poster.src = booking.poster;
    poster.alt = booking.title + " poster";

    const details = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = booking.title;

    const lineOne = document.createElement("p");
    lineOne.className = "line";
    const theatreName = document.createElement("b");
    theatreName.textContent = booking.theatre;
    lineOne.appendChild(theatreName);

    const lineTwo = document.createElement("p");
    lineTwo.className = "line";
    lineTwo.textContent = formatDateLong(booking.date) + " \u00B7 " + booking.time;

    const lineThree = document.createElement("p");
    lineThree.className = "line";
    lineThree.textContent = "Seats: " + booking.seats.join(", ") + "  |  PNR: " + booking.pnr;

    details.appendChild(title);
    details.appendChild(lineOne);
    details.appendChild(lineTwo);
    details.appendChild(lineThree);

    const side = document.createElement("div");
    side.className = "booking-side";

    const amount = document.createElement("span");
    amount.className = "amount";
    amount.textContent = formatCurrency(booking.amount);

    const actions = document.createElement("div");
    actions.className = "booking-actions";

    const viewLink = document.createElement("a");
    viewLink.className = "btn btn-ghost btn-sm";
    viewLink.href = "ticket.html?pnr=" + encodeURIComponent(booking.pnr);
    viewLink.textContent = "View Ticket";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "btn-cancel";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", function () {
      cancelBooking(booking.pnr);
    });

    actions.appendChild(viewLink);
    actions.appendChild(cancelButton);
    side.appendChild(amount);
    side.appendChild(actions);

    card.appendChild(poster);
    card.appendChild(details);
    card.appendChild(side);
    bookingList.appendChild(card);
  });
}

function cancelBooking(pnr) {
  const confirmed = window.confirm("Do you want to cancel this booking?");
  if (!confirmed) {
    return;
  }

  const bookings = getBookings();
  const target = bookings.find(function (item) {
    return item.pnr === pnr;
  });

  if (!target) {
    return;
  }

  const remaining = bookings.filter(function (item) {
    return item.pnr !== pnr;
  });
  saveBookings(remaining);

  const showKey = getShowKey(target.movieId, target.date, target.theatre, target.time);
  const bookedMap = getBookedMap();
  if (bookedMap[showKey]) {
    bookedMap[showKey] = bookedMap[showKey].filter(function (seat) {
      return target.seats.indexOf(seat) === -1;
    });
    saveBookedMap(bookedMap);
  }

  showToast("Booking " + pnr + " cancelled", "success");
  renderBookings();
}

renderBookings();
