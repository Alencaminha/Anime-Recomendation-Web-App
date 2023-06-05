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
    // This fetch serves to get the inputted anime's MAL id
    fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
    .then(res => res.json())
    .then(data => {
        let insertedAnimeMalId = data.data[0].mal_id;
        // This fetch serves to get a recommendation based on the anime id
        fetch(`https://api.jikan.moe/v4/anime/${insertedAnimeMalId}/recommendations`)
        .then(res => res.json())
        .then(data => {
            let randomId = Math.floor(Math.random() * data.data.length);
            let recommendedAnimeMalId = data.data[randomId].entry.mal_id;
            // And this fetch serves to get the recommended anime's full description
            fetch(`https://api.jikan.moe/v4/anime/${recommendedAnimeMalId}/full`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                document.getElementById("outputtedAnime").value = data.data.title_english;
            });
        });
    });
}
