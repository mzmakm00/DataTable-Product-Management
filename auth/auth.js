export const authorized_user = (currentUser) =>{

    if (!currentUser) {
        window.location.href = "error.html"
        return;
      }    
}

