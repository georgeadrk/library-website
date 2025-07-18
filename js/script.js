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
