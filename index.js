const homePage = document.getElementById("homePage");

const userData = localStorage.getItem("loggedInUser");

if (!userData) {
    window.location.href = "login.html";
}

const user = JSON.parse(userData);

const h2 = document.createElement("h2");
h2.innerText = "WELCOME HI!!";

const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Log out";

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});

homePage.appendChild(h2);
homePage.appendChild(logoutBtn);
