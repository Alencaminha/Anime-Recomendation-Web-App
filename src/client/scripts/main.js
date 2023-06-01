const loggedUser = sessionStorage.getItem("loggedUser");

window.onload = () => {
    if (loggedUser == null) {
        window.location.href = "login.html";
    }
}

if (window.location.pathname == '/src/client/pages/profile.html') {
    document.getElementById("usernameIdentification").innerHTML = "Olá, " + loggedUser;
}

searchRecommendation = () => {
    let anime = document.getElementById("inputtedAnime").value;
    fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`)
    .then(res => res.json())
    .then(data => console.log(data));
}
