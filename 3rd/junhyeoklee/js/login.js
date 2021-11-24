const id = document.getElementById("id");
const pw = document.getElementById("pw");
const button = document.getElementById("toList");
const showHide = document.getElementsByClassName("showHide")[0];

// id이벤트
id.addEventListener("input", (e) => {
  const num = pw.value.search(/[0-9]/g);
  const eng = pw.value.search(/[a-z]/gi);
  const spe = pw.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  if (
    id.value.includes("@") &&
    pw.value.length > 7 &&
    num > -1 &&
    eng > -1 &&
    spe > -1
  ) {
    button.style.backgroundColor = "#79BAF2";
  } else {
    button.style.backgroundColor = "#b4d2e8";
    id.style.borderColor = "#dddddd";
  }
  if (id.value.includes("@")) {
    id.style.borderColor = "#659c31";
  } else {
    id.style.borderColor = "#dddddd";
  }
});

// pw이벤트
pw.addEventListener("input", (e) => {
  const num = pw.value.search(/[0-9]/g);
  const eng = pw.value.search(/[a-z]/gi);
  const spe = pw.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (
    id.value.includes("@") &&
    pw.value.length > 7 &&
    num > -1 &&
    eng > -1 &&
    spe > -1
  ) {
    button.style.backgroundColor = "#79BAF2";
    pw.style.borderColor = "#659c31";
  } else {
    button.style.backgroundColor = "#b4d2e8";
    pw.style.borderColor = "#dddddd";
  }

  if (pw.value.length > 7 && num > -1 && eng > -1 && spe > -1) {
    pw.style.borderColor = "#659c31";
  } else {
    pw.style.borderColor = "#dddddd";
  }
});

// 클릭시 이벤트
button.addEventListener("click", () => {
  const num = pw.value.search(/[0-9]/g);
  const eng = pw.value.search(/[a-z]/gi);
  const spe = pw.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  if (
    id.value.includes("@") &&
    pw.value.length > 7 &&
    num > -1 &&
    eng > -1 &&
    spe > -1
  ) {
    sessionStorage.clear();
    sessionStorage.setItem("id", id.value);
    location.href = "./list.html";
  }
});

// pw show hide
showHide.addEventListener("click", () => {
  if (showHide.innerText === "show") {
    pw.setAttribute("type", "text");
    showHide.innerText = "hide";
  } else {
    pw.setAttribute("type", "password");
    showHide.innerText = "show";
  }
});
