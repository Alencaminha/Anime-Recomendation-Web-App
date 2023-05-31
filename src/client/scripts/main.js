const loggedUser = sessionStorage.getItem("loggedUser");

window.onload = () => {
    if (loggedUser == null) {
        window.location.href = "login.html";
    }
}

if (window.location.pathname == '/src/client/pages/profile.html') {
    document.getElementById("usernameIdentification").innerHTML = "Olá, " + loggedUser;
}
