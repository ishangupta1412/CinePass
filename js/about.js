const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

function setContactError(field, errorId, message) {
  document.getElementById(errorId).textContent = message;
  field.classList.toggle("invalid", message !== "");
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  if (contactName.value.trim().length < 3) {
    setContactError(contactName, "errContactName", "Please enter your name");
    valid = false;
  } else {
    setContactError(contactName, "errContactName", "");
  }

  if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(contactEmail.value.trim())) {
    setContactError(contactEmail, "errContactEmail", "Enter a valid email address");
    valid = false;
  } else {
    setContactError(contactEmail, "errContactEmail", "");
  }

  if (contactMessage.value.trim().length < 10) {
    setContactError(contactMessage, "errContactMessage", "Message should be at least 10 characters");
    valid = false;
  } else {
    setContactError(contactMessage, "errContactMessage", "");
  }

  if (!valid) {
    showToast("Please fill the form correctly", "error");
    return;
  }

  contactForm.reset();
  showToast("Thanks " + contactName.value.trim() + ". We will reply soon.", "success");
});
