window.onload = () => {
    if (sessionStorage.getItem("loggedUserId") == null) {
        window.location.href = "login.html";
    }
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
