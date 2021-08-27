let menu = document.querySelectorAll('.item');
let description = document.querySelectorAll('.item img');

for (let i = 0; i < menu.length; i++) {
    let info = document.createElement('p');
    info.textContent = description[i].alt;
    menu[i].append(info);
    info.className = "menu-description";
}

document.querySelector('.icecream p').style="cursor:pointer";
document.querySelector('.icecream p').setAttribute("onclick", "location.href='detail.html'")