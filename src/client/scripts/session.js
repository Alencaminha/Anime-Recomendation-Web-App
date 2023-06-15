window.onload = () => {
<<<<<<< HEAD
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
    });
}
=======
    if (sessionStorage.getItem("loggedUserId") == null) {
        window.location.href = "login.html";
    }
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
>>>>>>> 096dc6f18ef45ee8aee79c00bfa7c8e971a4aae9
