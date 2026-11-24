const moviePoster = document.getElementById("moviePoster");
const movieTitle = document.getElementById("movieTitle");
const movieTagline = document.getElementById("movieTagline");
const movieMeta = document.getElementById("movieMeta");
const movieSynopsis = document.getElementById("movieSynopsis");
const crumbTitle = document.getElementById("crumbTitle");
const dateRow = document.getElementById("dateRow");
const theatreGrid = document.getElementById("theatreGrid");
const timeGrid = document.getElementById("timeGrid");
const seatArea = document.getElementById("seatArea");
const seatCounter = document.getElementById("seatCounter");
const sumMovie = document.getElementById("sumMovie");
const sumDate = document.getElementById("sumDate");
const sumTheatre = document.getElementById("sumTheatre");
const sumTime = document.getElementById("sumTime");
const sumSeatCount = document.getElementById("sumSeatCount");
const sumSeatTags = document.getElementById("sumSeatTags");
const sumTotal = document.getElementById("sumTotal");
const proceedBtn = document.getElementById("proceedBtn");

const params = new URLSearchParams(window.location.search);
const movie = getMovie(params.get("movie")) || MOVIES[0];

const state = {
  date: "",
  theatre: THEATRES[0],
  time: SHOW_TIMES[2],
  seats: []
};

function buildDates() {
  dateRow.innerHTML = "";
  const today = new Date();
  const list = [];

  for (let i = 0; i < 5; i++) {
    const day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    list.push({
      iso: toISODate(day),
      dayName: i === 0 ? "Today" : DAY_NAMES[day.getDay()],
      dayNumber: day.getDate(),
      month: MONTH_NAMES[day.getMonth()]
    });
  }

  state.date = list[0].iso;

  list.forEach(function (item) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "date-chip" + (item.iso === state.date ? " active" : "");
    chip.dataset.date = item.iso;

    const dayName = document.createElement("span");
    dayName.textContent = item.dayName;

    const dayNumber = document.createElement("strong");
    dayNumber.textContent = item.dayNumber + " " + item.month;

    chip.appendChild(dayName);
    chip.appendChild(dayNumber);
    dateRow.appendChild(chip);
  });
}

function buildTheatres() {
  theatreGrid.innerHTML = "";
  THEATRES.forEach(function (name) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn" + (name === state.theatre ? " active" : "");
    button.dataset.theatre = name;
    button.textContent = name;
    theatreGrid.appendChild(button);
  });
}

function buildTimes() {
  timeGrid.innerHTML = "";
  SHOW_TIMES.forEach(function (time) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn" + (time === state.time ? " active" : "");
    button.dataset.time = time;
    button.textContent = time;
    timeGrid.appendChild(button);
  });
}

function renderMovieDetails() {
  document.title = "Select Seats | " + movie.title + " | CinePass";
  crumbTitle.textContent = movie.title;
  moviePoster.src = movie.poster;
  moviePoster.alt = movie.title + " poster";
  movieTitle.textContent = movie.title;
  movieTagline.textContent = movie.tagline || movie.year + " \u00B7 " + movie.genre + " \u00B7 " + movie.language;
  movieSynopsis.textContent = movie.synopsis;

  movieMeta.innerHTML = "";
  const tags = [movie.genre, movie.language, movie.duration, movie.certificate, "\u2605 " + movie.rating.toFixed(1), movie.year];
  tags.forEach(function (value) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = value;
    movieMeta.appendChild(tag);
  });
}

function renderSeats() {
  seatArea.innerHTML = "";
  const bookedSeats = getBookedSeats(movie.id, state.date, state.theatre, state.time);

  SEAT_ROWS.forEach(function (row) {
    const rowElement = document.createElement("div");
    rowElement.className = "seat-row";

    const label = document.createElement("span");
    label.className = "row-label";
    label.textContent = row;
    rowElement.appendChild(label);

    for (let number = 1; number <= SEATS_PER_ROW; number++) {
      if (number === 6) {
        const aisle = document.createElement("span");
        aisle.className = "aisle";
        rowElement.appendChild(aisle);
      }

      const seatId = row + number;
      const seat = document.createElement("button");
      seat.type = "button";
      seat.className = "seat";
      seat.dataset.seat = seatId;
      seat.textContent = number;
      seat.title = seatId + " \u00B7 " + formatCurrency(getSeatPrice(seatId));

      if (bookedSeats.indexOf(seatId) > -1) {
        seat.classList.add("booked");
        seat.disabled = true;
      }

      if (state.seats.some(function (item) { return item.id === seatId; })) {
        seat.classList.add("selected");
      }

      rowElement.appendChild(seat);
    }

    seatArea.appendChild(rowElement);
  });
}

function updateSummary() {
  const count = state.seats.length;
  const total = state.seats.reduce(function (sum, seat) {
    return sum + seat.price;
  }, 0);

  sumMovie.textContent = movie.title;
  sumDate.textContent = formatDateLong(state.date);
  sumTheatre.textContent = state.theatre;
  sumTime.textContent = state.time;
  sumSeatCount.textContent = count;
  sumTotal.textContent = formatCurrency(total);
  seatCounter.textContent = count + (count === 1 ? " seat selected" : " seats selected");

  sumSeatTags.innerHTML = "";
  state.seats.forEach(function (seat) {
    const tag = document.createElement("span");
    tag.className = "seat-tag";
    tag.textContent = seat.id;
    sumSeatTags.appendChild(tag);
  });

  proceedBtn.disabled = count === 0;
}

function resetSeats() {
  state.seats = [];
  renderSeats();
  updateSummary();
}

dateRow.addEventListener("click", function (event) {
  const chip = event.target.closest(".date-chip");
  if (!chip) {
    return;
  }
  dateRow.querySelectorAll(".date-chip").forEach(function (item) {
    item.classList.remove("active");
  });
  chip.classList.add("active");
  state.date = chip.dataset.date;
  resetSeats();
});

theatreGrid.addEventListener("click", function (event) {
  const button = event.target.closest(".option-btn");
  if (!button) {
    return;
  }
  theatreGrid.querySelectorAll(".option-btn").forEach(function (item) {
    item.classList.remove("active");
  });
  button.classList.add("active");
  state.theatre = button.dataset.theatre;
  resetSeats();
});

timeGrid.addEventListener("click", function (event) {
  const button = event.target.closest(".option-btn");
  if (!button) {
    return;
  }
  timeGrid.querySelectorAll(".option-btn").forEach(function (item) {
    item.classList.remove("active");
  });
  button.classList.add("active");
  state.time = button.dataset.time;
  resetSeats();
});

seatArea.addEventListener("click", function (event) {
  const seatButton = event.target.closest(".seat");
  if (!seatButton || seatButton.classList.contains("booked")) {
    return;
  }

  const seatId = seatButton.dataset.seat;
  const index = state.seats.findIndex(function (seat) {
    return seat.id === seatId;
  });

  if (index > -1) {
    state.seats.splice(index, 1);
    seatButton.classList.remove("selected");
  } else {
    if (state.seats.length >= MAX_SEATS) {
      showToast("You can book a maximum of " + MAX_SEATS + " seats", "error");
      return;
    }
    state.seats.push({
      id: seatId,
      price: getSeatPrice(seatId),
      tier: getSeatTier(seatId).name
    });
    seatButton.classList.add("selected");
  }

  updateSummary();
});

proceedBtn.addEventListener("click", function () {
  if (state.seats.length === 0) {
    showToast("Please select at least one seat", "error");
    return;
  }

  const total = state.seats.reduce(function (sum, seat) {
    return sum + seat.price;
  }, 0);

  writeJSON(STORAGE.pending, {
    movieId: movie.id,
    date: state.date,
    theatre: state.theatre,
    time: state.time,
    seats: state.seats,
    total: total
  });

  window.location.href = "checkout.html";
});

renderMovieDetails();
buildDates();
buildTheatres();
buildTimes();
renderSeats();
updateSummary();
