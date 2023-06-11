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
    });
}

searchRecommendation = () => {
    let anime = document.getElementById("inputtedAnime").value;
    // This fetch serves to get the inputted anime's MAL id
    fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
    .then(res => res.json())
    .then(data => {
        let insertedAnimeMalId = data.data[0].mal_id;
        updateUser("input_id", insertedAnimeMalId);
        // This fetch serves to get a recommendation based on the anime id
        fetch(`https://api.jikan.moe/v4/anime/${insertedAnimeMalId}/recommendations`)
        .then(res => res.json())
        .then(data => {
            let randomId = Math.floor(Math.random() * data.data.length);
            let recommendedAnimeMalId = data.data[randomId].entry.mal_id;
            updateUser("recommended_id", recommendedAnimeMalId);
            // And this fetch serves to get the recommended anime's full description
            fetch(`https://api.jikan.moe/v4/anime/${recommendedAnimeMalId}/full`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                document.getElementById("outputtedAnime").value = data.data.title_english;
                document.getElementById("animeGenre").value = data.data.genres[0].name;
                document.getElementById("animeEpisodes").value = data.data.episodes;
                document.getElementById("animeEpDuration").value = data.data.duration;
                document.getElementById("animeImage").src = data.data.images.jpg.image_url;
            });
        });
    });
}

updateUser = (fieldToChange, newValue) => {
    fetch("http://localhost:3000/updateuser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                field: fieldToChange,
                value: newValue,
                id: sessionStorage.getItem("loggedUserId")
            })
        });
}

copyContent = () => {
    document.getElementById("outputtedAnime").select();
    navigator.clipboard.writeText(copyText.value);
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
