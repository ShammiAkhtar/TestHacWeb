// script.js

const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const closeBtn = document.querySelector(".close");

loginBtn.onclick = function () {
  loginModal.style.display = "block";
};

closeBtn.onclick = function () {
  loginModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    loginModal.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

logoutBtn.onclick = function () {
  alert("Logged out successfully.");
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
};
