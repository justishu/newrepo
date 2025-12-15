const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("pswd").value
        })
    })
    .then(function () {
        alert("Registration successful");
        window.location.href = "/login.html";
    })
    .catch(function () {
        alert("Something went wrong");
    });
});
