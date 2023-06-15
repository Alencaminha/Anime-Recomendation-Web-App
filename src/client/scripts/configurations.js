const userId = sessionStorage.getItem("loggedUserId");

alterUserData = (fieldToChange, element) => {
    if (window.confirm("Are you sure you want to change this information?")) {
        fetch("http://localhost:3000/updateuser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                field: fieldToChange,
                value: element.value,
                id: userId
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            element.value = "";
        });
    }
}

deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
        fetch("http://localhost:3000/deleteuser", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userId
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem("loggedUserId", null);
            window.location.href = "/index.html";
        });
    }
}
