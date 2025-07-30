document.addEventListener('DOMContentLoaded', () => {
  const authLinks = document.getElementById('auth-links');
  const currentUser = JSON.parse(localStorage.getItem('bookoria_logged_in'));

  if (authLinks) {
    if (currentUser) {
      authLinks.innerHTML = `
        | <span>Welcome, ${currentUser.username}</span>
        | <a href="#" onclick="logout()">Logout</a>
      `;
    } else {
      authLinks.innerHTML = `
        <a href="login.html">Login</a> | 
        <a href="register.html">Register</a>
      `;
    }
  }
});

function logout() {
  localStorage.removeItem('bookoria_logged_in');
  window.location.href = 'index.html';
}

const user = JSON.parse(localStorage.getItem("bookoria_logged_in"));

const guestLinks = document.getElementById("auth-guest");
const userSection = document.getElementById("auth-user");
const userGreeting = document.getElementById("user-greeting");
const logoutBtn = document.getElementById("logout-btn");

if (user) {
  guestLinks.style.display = "none";
  userGreeting.textContent = `Logged in as ${user.name}`;
  userSection.style.display = "inline";
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("bookoria_logged_in");
  window.location.reload(); // Refresh page on logout
});

const users = JSON.parse(localStorage.getItem("bookoria_users") || "[]");

const ownerExists = users.some(user => user.email === "owner@bookoria.com");

if (!ownerExists) {
  users.push({
    email: "owner@bookoria.com",
    password: "admin123",
    name: "Owner",
    role: "owner"
  });
  localStorage.setItem("bookoria_users", JSON.stringify(users));
}

