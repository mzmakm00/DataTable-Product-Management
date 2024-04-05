class ShowMessage {
  constructor() {
    this.errorModal = document.getElementById("errorModal");
    this.successMessages = {};
  }

  showErrorModal() {
    this.errorModal.style.display = "block";
  
    // Hide the modal when close button is clicked
    const closeButton = this.errorModal.querySelector(".close");
    closeButton.addEventListener("click", () => {
      this.errorModal.style.display = "none";
    });
  }

  showSuccessMessage(msgID) {
    const successMessage = document.getElementById(msgID);
    successMessage.style.display = "block";
  
    // Hide the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
}

export default ShowMessage;



