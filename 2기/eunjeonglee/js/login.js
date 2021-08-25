"use strict";

const user = document.querySelector("#userId");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#btn");

function loginColorHandler(event) {
  const username = document.querySelector("#userId").value;
  const userpw = document.querySelector("#password").value;
  if((username.includes("@")) && (userpw.length >= 8)) {
    const loginBtn = document.querySelector("#btn");
    loginBtn.classList.add("btn");
  } else {
    loginBtn.classList = '';
  }
}

window.addEventListener("keyup", loginColorHandler);

const loginForm = document.querySelector("#login-form");

function clickedBtn(event) {
  event.preventDefault();
  const username = document.querySelector("#userId").value;
  const userpw = document.querySelector("#password").value;
  if((username.includes("@")) && (userpw.length >= 8)) {
  window.location.href = "http://127.0.0.1:5500/webucks/list.html"
  }
}

loginBtn.addEventListener("click", clickedBtn)

