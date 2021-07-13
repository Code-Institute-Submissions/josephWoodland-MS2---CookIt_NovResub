const deleteModal = document.querySelector(".delete__modal");

export function clearPopup() {
  const answer = window.confirm(
    "Are you sure you want to delete local storage?"
  );
  if (answer) {
    localStorage.clear();
    window.location.reload();
  } else {
    return;
  }
}
