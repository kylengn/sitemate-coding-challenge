let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let yesButton = document.querySelector(".yesBtn");
let cancelButton = document.querySelector(".cancelBtn");
let message = document.querySelector(".message");

function toggleModal() {
  modal.classList.toggle("show-modal");
  message.innerHTML = "";
}

yesButton.addEventListener("click", function () {
  toggleModal();
  message.innerHTML = `You just clicked "Yes"`;
});

cancelButton.addEventListener("click", function () {
  toggleModal();
  message.innerHTML = `You just clicked "Cancel"`;
});

show.addEventListener("click", toggleModal);
