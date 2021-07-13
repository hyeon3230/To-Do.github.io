const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function enterkey(){
  if (window.event.keyCode == 13) {
    loginForm.submit();
  }
}

function loginSubmit(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("USERNAME", username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("USERNAME");

if (savedUsername == null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}
