// Input form data collection

// Element selcetors
const modal = document.querySelector(".overlay");
const form = document.querySelector(".form");
const close = document.querySelector(".form__right-close");

// Function to open the modal
export const openModal = function () {
  // Remove the hidden class from the HTML
  modal.classList.remove("hidden");
  form.classList.remove("hidden");
};

// Function to close the modal
export const closeModal = function () {
  // Click outside the modal - this took me a while as the first function would close if I clicked anywhere
  // on the screen including the form - changed the formModal html class to overlay and did not wrap the form inside the div.
  modal.classList.add("hidden");
  form.classList.add("hidden");
};

export const escPress = function (k) {
  // console.log(k); - help me find which key is the Escape
  // Look for the esc key press - then close the modal
  if (k.key === "Escape") {
    closeModal()
  } else {
    return;
  }
};
