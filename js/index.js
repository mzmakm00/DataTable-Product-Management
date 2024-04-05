import AuthErrorModal from "../showErrorModal/authErrorModal.js";

const authErrorModal = new AuthErrorModal()
class Registration{
    constructor(){
        this.initEventListeners();
    }

    initEventListeners(){
        document.getElementById("save_btn").addEventListener('click', () => {
            this.register();
        });
    }

    register(){
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
    
        const isTrue = authErrorModal.checkFields(username,email,password)
        
        if( isTrue ){
            return
        }
    
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            authErrorModal.showModal("Invalid Email Format", "red");
            return;
        }
    
        let register_users = JSON.parse(localStorage.getItem("users")) || [];
    
        if (register_users.some((v) => v.email === email)) {
            authErrorModal.showModal("Already registered with this Email", "red");
        } 
        else 
        {
            const data = { 
                username: username,
                email: email,
                password: password
            };
    
            register_users.push(data);
            localStorage.setItem("users", JSON.stringify(register_users));
            
            setTimeout(function() {
                authErrorModal.showModal("Successfully ! You has been Registered ", "blue");
      
                setTimeout(function() {
      
                    window.location.href = "login.html";
      
                }, 1000);
      
            }, 0);
    
            document.getElementById("username").value = '';
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
    
    }
}

}

const register = new Registration()
