import  AuthErrorModal from "../showErrorModal/authErrorModal.js";

//make the Object of authErrorModal
 const authErrorModal = new AuthErrorModal()

class Login {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById("save_btn").addEventListener('click', () => {
            this.login();
        });
    }

    login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let register_users = JSON.parse(localStorage.getItem("users")) || [];

        const loggedInUser = register_users.find(user => user.email === email && user.password === password);

        const isTrue = authErrorModal.checkFieldslogin(email, password);
        if (isTrue) {
            return;
        }

        if (loggedInUser) {
            localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
            setTimeout(() => {
                authErrorModal.showModal("Successfully ! You have been logged in ", "green");
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            }, 0);
        } else if (register_users.some(user => user.email === email)) {
            authErrorModal.showModal("Invalid Password", "red");
        } else {
            authErrorModal.showModal("Email not registered", "red");
        }
    }
}

// Instantiate the Login class to start the login functionality
const loginInstance = new Login();
