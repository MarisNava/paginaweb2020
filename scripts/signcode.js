document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});

const auth = firebase.auth();
const signupForm = document.querySelector("#signup-form");
const logout = document.querySelector("#logout");
const loginForm = document.querySelector("#login-form");
const loggedinLink = document.querySelectorAll(".loggedin");
const loggedoutLink = document.querySelectorAll(".loggedout");
const accountDetails = document.querySelector(".account-details");
let band=0;

auth.onAuthStateChanged((user) => {
  if (user) {
    const html = `<div class="pesp"> Correo ligado a la cuenta: ${user.email}<div>
    `;
    accountDetails.innerHTML = html;
    loggedinLink.forEach((item) => (item.style.display = "block"));
    loggedoutLink.forEach((item) => (item.style.display = "none"));
    if (user.email === "correo.falso@gmail.com") {
      $("#crudbtn").show();
    }
  } else {
    accountDetails.innerHTML = "";
    loggedinLink.forEach((item) => (item.style.display = "none"));
    loggedoutLink.forEach((item) => (item.style.display = "block"));
    band=0;
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
  window.location.replace("../index.html");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
