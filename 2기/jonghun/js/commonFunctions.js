class CommonData {
  constructor(dataName) {
    this.dataName = dataName;
  }

  saveData(data) {
    localStorage.setItem(this.dataName, JSON.stringify(data));
  }

  findMany() {
    return JSON.parse(localStorage.getItem(this.dataName));
  }

  findByIndex(index) {
    return this.findMany().find((item) => item.index === index);
  }

  updateOne(oneData) {
    return this.saveData((this.findMany()[oneData.index] = oneData));
  }

  deleteByIndex(index) {
    this.saveData(this.findMany().filter((item) => item.index !== index));
  }
}

class Paint {
  constructor(parentElements) {
    for (let item of parentElements) {
      this[item] = document.getElementById(item);
    }
  }

  coffeePainter(data, commentElementId) {
    const tags = data.map(({ img, title, isGetHeart }, index) => {
      return `<div class="coffees__coffee" >
                <div class="img__container" onclick="goDetail('${index}','${img}','${title}',${isGetHeart})">
                  <img src="${img}" alt="${title}" class="coffee__img" />
                </div>
                <span class="coffee__name">
  
                  <i class="far fa-heart heart-empty ${isGetHeart && "none"}" 
                    onclick="getHeart('${index}','${commentElementId}')" ></i>
                    
                  <i class="fas fa-heart red heart-full ${
                    isGetHeart && "show"
                  }" onclick="getHeart('${index}','${commentElementId}')"></i>
                  ${title}
                </span>
              </div>`;
    });

    this[commentElementId].innerHTML = tags.join("");
  }
}
