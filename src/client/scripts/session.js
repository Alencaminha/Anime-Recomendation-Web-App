window.onload = () => {
    if (sessionStorage.getItem("loggedUser") == null) {
        window.location.href = "login.html";
    }
}