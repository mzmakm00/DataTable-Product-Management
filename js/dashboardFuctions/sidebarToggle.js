class SidebarManager {
  static setupSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");
    const bxmenuid = document.querySelector("#bx-menuid");

    bxmenuid.addEventListener("click", () => {
      sidebar.classList.toggle('active');
    });

    function toggleSidebar() {
      if(window.innerWidth > 1100){
        sidebar.classList.add('active');
      } else {
        sidebar.classList.remove('active');
      }
    }

    toggleSidebar();

    window.addEventListener('resize', toggleSidebar);
  }

  static logoutUser() {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector(".removeLogout").addEventListener('click', () => {
        localStorage.removeItem("LoggedInUser");
        window.location.href = "login.html";
      });
    });
  }
}

class UserDataDisplayer {
  static showUserData() {
    document.addEventListener("DOMContentLoaded", () => {
      const loggedInUserString = localStorage.getItem("LoggedInUser");
      
      if (loggedInUserString) {
        const loggedInUser = JSON.parse(loggedInUserString);
        console.log(loggedInUser.username);
        document.getElementById("userName").textContent = loggedInUser.username;
        document.getElementById("userEmail").textContent = loggedInUser.email;
      }
    });
  }
}

// Export the classes
export { SidebarManager, UserDataDisplayer };
