function startTicket() {
  const params = new URLSearchParams(window.location.search);
  const pnrCode = params.get("pnr");
  const booking = getBookings().find(function (item) {
    return item.pnr === pnrCode;
  });

  if (!booking) {
    window.location.href = "my-bookings.html";
    return;
  }

  document.title = "Ticket " + booking.pnr + " | CinePass";
  document.getElementById("ticketMovie").textContent = booking.title;
  document.getElementById("ticketMeta").textContent =
    booking.genre + " \u00B7 " + booking.language + " \u00B7 " + booking.duration;
  document.getElementById("ticketDate").textContent = formatDateLong(booking.date);
  document.getElementById("ticketTime").textContent = booking.time;
  document.getElementById("ticketTheatre").textContent = booking.theatre;
  document.getElementById("ticketSeats").textContent = booking.seats.join(", ");
  document.getElementById("ticketName").textContent = booking.customer.name;
  document.getElementById("ticketAmount").textContent = formatCurrency(booking.amount);
  document.getElementById("ticketPnr").textContent = booking.pnr;

  document.getElementById("printBtn").addEventListener("click", function () {
    window.print();
  });

  showToast("Booking confirmed. Your PNR is " + booking.pnr, "success");
}

startTicket();
