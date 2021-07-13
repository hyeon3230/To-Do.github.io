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

const time = new Date();
const nowHour = time.getHours();

function nowTime(username){
  if (24 <= nowHour < 6){
      greeting.innerText = `Good dawn, ${username}`;
  } else if (6 <= nowHour < 12){
    greeting.innerText = `Good morning, ${username}`;
  } else if (12 <= nowHour < 5){
    greeting.innerText = `Good afternoon, ${username}`;
  } else if (5 <= nowHour < 8){
    greeting.innerText = `Good evening, ${username}`;
  } else if (8 <= nowHour < 12){
    greeting.innerText = `Good night, ${username}`;
  }
}

function paintGreeting(username){
  nowTime(username);
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("USERNAME");

if (savedUsername == null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}
