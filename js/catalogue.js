const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const chipsBox = document.getElementById("filterChips");
const genreSelect = document.getElementById("genreSelect");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");

const isAnimePage = grid.dataset.scope === "anime";
const catalogue = MOVIES.filter(function (movie) {
  return isAnimePage ? movie.category === "Anime" : movie.category !== "Anime";
});

const state = {
  chipType: chipsBox ? chipsBox.dataset.type : "language",
  chipValue: "All",
  genre: "All",
  sort: "rating",
  search: ""
};

if (genreSelect) {
  const genres = [];
  catalogue.forEach(function (movie) {
    if (genres.indexOf(movie.genre) === -1) {
      genres.push(movie.genre);
    }
  });
  genres.sort();

  genres.forEach(function (genre) {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function sortMovies(list) {
  const sorted = list.slice();

  if (state.sort === "rating") {
    sorted.sort(function (a, b) {
      return b.rating - a.rating;
    });
  } else if (state.sort === "newest") {
    sorted.sort(function (a, b) {
      return b.year - a.year || b.rating - a.rating;
    });
  } else if (state.sort === "oldest") {
    sorted.sort(function (a, b) {
      return a.year - b.year;
    });
  } else {
    sorted.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }

  return sorted;
}

function render() {
  const filtered = sortMovies(
    catalogue.filter(function (movie) {
      const chipMatch =
        state.chipValue === "All" ||
        (state.chipType === "genre" ? movie.genre === state.chipValue : movie.language === state.chipValue);
      const genreMatch = state.genre === "All" || movie.genre === state.genre;
      const haystack = (movie.title + " " + movie.genre + " " + movie.language + " " + movie.year).toLowerCase();
      const searchMatch = haystack.indexOf(state.search) > -1;
      return chipMatch && genreMatch && searchMatch;
    })
  );

  grid.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";

    const heading = document.createElement("h3");
    heading.textContent = "No titles found";

    const text = document.createElement("p");
    text.textContent = "Try another language, genre or search keyword.";

    empty.appendChild(heading);
    empty.appendChild(text);
    grid.appendChild(empty);
  } else {
    filtered.forEach(function (movie, index) {
      grid.appendChild(buildMovieCard(movie, index));
    });
  }

  resultCount.textContent =
    filtered.length === 0
      ? "Nothing matched"
      : filtered.length + " of " + catalogue.length + " titles";

  if (window.startReveal) {
    window.startReveal();
  }
}

if (chipsBox) {
  chipsBox.addEventListener("click", function (event) {
    const chip = event.target.closest(".chip");
    if (!chip) {
      return;
    }
    chipsBox.querySelectorAll(".chip").forEach(function (item) {
      item.classList.remove("active");
    });
    chip.classList.add("active");
    state.chipValue = chip.dataset.value;
    render();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    state.search = searchInput.value.trim().toLowerCase();
    render();
  });
}

if (genreSelect) {
  genreSelect.addEventListener("change", function () {
    state.genre = genreSelect.value;
    render();
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    state.sort = sortSelect.value;
    render();
  });
}

render();
