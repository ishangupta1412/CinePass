let revealTimer = null;

function revealInView() {
  const items = document.querySelectorAll(".reveal:not(.in)");

  items.forEach(function (item) {
    const box = item.getBoundingClientRect();
    if (box.top < window.innerHeight - 40 && box.bottom > 0) {
      item.classList.add("in");
    }
  });
}

function scheduleReveal() {
  clearTimeout(revealTimer);
  revealTimer = setTimeout(revealInView, 60);
}

function startReveal() {
  clearTimeout(revealTimer);
  revealInView();
}

window.startReveal = startReveal;

window.addEventListener("scroll", scheduleReveal);
window.addEventListener("resize", scheduleReveal);
window.addEventListener("load", startReveal);
document.addEventListener("DOMContentLoaded", startReveal);

window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
});

const navBookingLink = document.querySelector('.nav-links a[href="my-bookings.html"]');
const navBadge = navBookingLink ? navBookingLink.querySelector(".nav-badge") : null;

if (navBookingLink && !navBadge) {
  const existing = getBookings();
  if (existing.length > 0) {
    const badge = document.createElement("span");
    badge.className = "nav-badge";
    badge.textContent = existing.length;
    navBookingLink.appendChild(badge);
  }
}
