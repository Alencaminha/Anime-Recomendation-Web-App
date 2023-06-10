window.onload = () => {
    if (sessionStorage.getItem("loggedUserId") == null) {
        window.location.href = "login.html";
    }
}