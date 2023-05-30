const loggedUser = sessionStorage.getItem("loggedUser");

window.onload = () => {
    if (loggedUser == null) {
        window.location.href = "login.html";
    }
}

document.getElementById("usernameIdentification").innerHTML = "Olá, " + loggedUser;
