let heart = document.querySelector('.fa-heart');
heart.setAttribute("onclick", "style.color='red'");

let comment = document.querySelector('.input-review');
comment.addEventListener('keypress', (key) => {
    if(key.key == 'Enter') {
        let Line = document.createElement('div');
        let Reviews = document.querySelector('section.reviews');
        Reviews.append(Line);
        let Id = document.createElement('span');
        Id.textContent = "kclaireyh";
        Line.append(Id);
        let Content = document.createElement('span');
        Content.textContent = comment.value;
        Line.append(Content);
    }
})

