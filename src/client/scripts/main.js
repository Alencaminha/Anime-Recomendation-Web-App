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
    .then(data => {
        document.getElementById("usernameIdentification").innerHTML = "Olá, " + data.username;
        // For user input box
        fetch(`https://api.jikan.moe/v4/anime/${data.input_id}/full`)
        .then(res => res.json())
        .then(data => {document.getElementById("inputtedAnime").value = data.data.title_english});
        // For recommended anime box
        fetch(`https://api.jikan.moe/v4/anime/${data.recommended_id}/full`)
        .then(res => res.json())
        .then(data => {document.getElementById("outputtedAnime").value = data.data.title_english});
    });
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

copyContent = () => {
    const copyText = document.getElementById("outputtedAnime");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
