const nowShowingRow = document.getElementById("nowShowing");
const animeRow = document.getElementById("animeRow");
const classicsRow = document.getElementById("classicsRow");
const heroPoster = document.getElementById("heroPoster");
const heroPick = document.getElementById("heroPick");
const tickerTrack = document.getElementById("tickerTrack");

const fiction = MOVIES.filter(function (movie) {
  return movie.category !== "Anime";
});

const nowShowing = fiction
  .slice()
  .sort(function (a, b) {
    return b.year - a.year || b.rating - a.rating;
  })
  .slice(0, 8);

const animePicks = MOVIES.filter(function (movie) {
  return movie.category === "Anime";
})
  .slice()
  .sort(function (a, b) {
    return b.rating - a.rating;
  })
  .slice(0, 6);

const classics = fiction
  .slice()
  .sort(function (a, b) {
    return b.rating - a.rating;
  })
  .slice(0, 6);

const featured = getMovie("the-dark-knight");

if (featured) {
  heroPoster.src = featured.poster;
  heroPoster.alt = featured.title + " poster";
  heroPick.textContent = featured.title + " \u00B7 " + featured.rating.toFixed(1);
}

function fillRow(container, list) {
  container.innerHTML = "";
  list.forEach(function (movie, index) {
    container.appendChild(buildMovieCard(movie, index));
  });
}

fillRow(nowShowingRow, nowShowing);
fillRow(animeRow, animePicks);
fillRow(classicsRow, classics);

const tickerTitles = ["Now showing", "Dolby Atmos", "Recliner seats", "Instant PNR", "Free cancellation", "Delhi NCR"];
const tickerNames = nowShowing.slice(0, 4).map(function (movie) {
  return movie.title;
});

function tickerItem(text) {
  const item = document.createElement("span");
  if (tickerTitles.indexOf(text) > -1) {
    item.textContent = text;
  } else {
    const tag = document.createElement("b");
    tag.textContent = text;
    item.appendChild(tag);
  }
  return item;
}

tickerNames.concat(tickerTitles).forEach(function (text) {
  tickerTrack.appendChild(tickerItem(text));
});

tickerTrack.innerHTML += tickerTrack.innerHTML;

document.getElementById("totalTitles").textContent = MOVIES.length;
