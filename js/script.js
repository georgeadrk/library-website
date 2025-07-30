document.addEventListener('DOMContentLoaded', () => {
  const authLinks = document.getElementById('auth-links');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

const user = JSON.parse(localStorage.getItem("bookoria_logged_in"));

const guestLinks = document.getElementById("auth-guest");
const userSection = document.getElementById("auth-user");
const userGreeting = document.getElementById("user-greeting");
const logoutBtn = document.getElementById("logout-btn");

if (user) {
  guestLinks.style.display = "none";
  userGreeting.textContent = `Logged in as ${user.email}`;
  userSection.style.display = "inline";
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("bookoria_logged_in");
  window.location.reload(); // Refresh page on logout
});