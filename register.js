document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let userName = document.getElementById("username").value;
    let pass = document.getElementById("pswd").value;


    fetch(`http://localhost:3000/users?username=${userName}`)
    .then(res => res.json())
    .then(user => {
        if(user.length > 0){
            alert("User already exists!");
            window.location.href="/login.html"
            return;
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userName, password: pass })
        })
        .then(() => {
            alert("Signup successful! Please login now.");
            window.location.href = "/login.html";
        });
    });
});