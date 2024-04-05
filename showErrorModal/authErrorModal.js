class AuthErrorModal {
    constructor() {
        // No initialization required for this example
    }

    showModal(message, color) {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `<p>${message}</p>`;
        const modalHeader = document.querySelector('.modal-header');
        modalHeader.style.backgroundColor = color;
        modalHeader.style.color = 'white'; 
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }

    checkFields(username, email, password) {
        let errorText = "Please fill out the following fields !";

        if (username === '') {
            errorText += " UserName ";
        }
        if (email === '') {
            errorText += " Email ";
        }
        if (password === '') {
            errorText += " Password ";
            console.log("hello");
        }

        if (username === '' || email === '' || password === '') {
            this.showModal(errorText, "red");
            return true;
        }
    }

    checkFieldslogin(email, password) {
        let errorText = "Please fill out the following fields !";

        if (email === '') {
            errorText += " Email ";
        }
        if (password === '') {
            errorText += " Password ";
            console.log("hello");
        }

        if (email === '' || password === '') {
            this.showModal(errorText, "red");
            return true;
        }
    }
}

const authErrorModal = new AuthErrorModal();
// authErrorModal.showModal("Test message", "blue");
// authErrorModal.checkFields("username", "email", "password");
// authErrorModal.checkFieldslogin("email", "password");


 export default AuthErrorModal