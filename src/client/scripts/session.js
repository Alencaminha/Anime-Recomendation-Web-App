window.onload = () => {
    if (sessionStorage.getItem("loggedUserId") == null) {
        window.location.href = "login.html";
    }
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
 
window.onload = () => {
    fetch("http://localhost:3000/readuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: sessionStorage.getItem("loggedUserId")
        })
    })
    .then(res => res.json())
    .then(userData => {
        document.getElementById("usernameIdentification").innerHTML = "Olá, " + userData.username;

        if (window.location.pathname == "/src/client/pages/profile.html") {
            // For user input box
            fetch(`https://api.jikan.moe/v4/anime/${userData.input_id}`)
            .then(res => res.json())
            .then(data => {document.getElementById("inputtedAnime").value = data.data.title_english});
            // For recommended anime box
            fetch(`https://api.jikan.moe/v4/anime/${userData.recommended_id}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("outputtedAnime").value = data.data.title_english;
                document.getElementById("animeGenre").value = data.data.genres[0].name;
                document.getElementById("animeEpisodes").value = data.data.episodes;
                document.getElementById("animeEpDuration").value = data.data.duration;
                document.getElementById("animeImage").src = data.data.images.jpg.image_url;
            });
        }
    });
}
