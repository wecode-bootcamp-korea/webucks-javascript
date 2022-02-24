window.onload = function() {

    const productList = [
    [
        {
        productName : "나이트로 바닐라 크림",
        imgUrl : "img/cold_brew_coffee_001.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=나이트로 바닐라 크림&imgUrl=img/cold_brew_coffee_001.jpg&allergy=우유"
        },
        {
        productName : "나이트로 콜드 브루",
        imgUrl : "img/cold_brew_coffee_002.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=나이트로 콜드 브루&imgUrl=img/cold_brew_coffee_002.jpg&allergy=우유"
        },
        {
        productName : "돌체 콜드 브루",
        imgUrl : "img/cold_brew_coffee_003.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=돌체 콜드 브루&imgUrl=img/cold_brew_coffee_003.jpg&allergy=우유"
        },
        {
        productName : "바닐라 크림 콜드 브루",
        imgUrl : "img/cold_brew_coffee_004.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=바닐라 크림 콜드 브루&imgUrl=img/cold_brew_coffee_004.jpg&allergy=바닐라"
        },
        {
        productName : "시그니처 더 블랙 콜드 브루",
        imgUrl : "img/cold_brew_coffee_005.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=시그니처 더 블랙 콜드 브루&imgUrl=img/cold_brew_coffee_005.jpg&allergy=없음"
        },
        {
        productName : "콜드 브루 플로트",
        imgUrl : "img/cold_brew_coffee_006.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=콜드 브루 플로트&imgUrl=img/cold_brew_coffee_006.jpg&allergy=우유"
        },
        {
        productName : "콜드 브루 몰트",
        imgUrl : "img/cold_brew_coffee_007.jpg",
        detailUrlparameter : "type=콜드 브루 커피&productName=콜드 브루 몰트&imgUrl=img/cold_brew_coffee_007.jpg&allergy=없음"
        }
    ],
    [
        {
        productName : "아이스 커피",
        imgUrl : "img/brewed_coffee_001.jpg",
        detailUrlparameter : "type=브루드 커피&productName=아이스 커피&imgUrl=img/brewed_coffee_001.jpg&allergy=없음"
        },
        {
        productName : "오늘의 커피",
        imgUrl : "img/brewed_coffee_002.jpg",
        detailUrlparameter : "type=브루드 커피&productName=오늘의 커피&imgUrl=img/brewed_coffee_001.jpg&allergy=없음"
        }
    ]
    ]

    let arrElement = ["li","dl","dt","a","img","dd"];
    let createElement;
    let createTargetElement = document.querySelectorAll("#container_boxing ul");
    let reTargetElement;
    let dtailUrl = location.href.replace("list.html","detail.html?");

    function elementsProductsParsing(productObjectList) {
        for(let i = 0; i < productObjectList.length; i++) {

            for (const key in productObjectList[i]) {            
                parsingList(createTargetElement[i],productObjectList[i][key]);
            }
    
        }
    }

    function parsingList(targetEle, product) {
        arrElement.map((list) => partsCreateElement(list, targetEle, product));
    }

    function partsCreateElement(list, targetEle, product) {

        switch(list) {
            case "li" : 
                createElement = returnCreateElement(list);                     
                reTargetElement = targetEle.appendChild(createElement);
                break;
            case "dl" :
                createElement = returnCreateElement(list); 
                reTargetElement = reTargetElement.appendChild(createElement);                
                break;
            case "dt" :
                createElement = returnCreateElement(list); 
                reTargetElement = reTargetElement.appendChild(createElement);
                break;
            case "a" :
                createElement = returnCreateElement(list);
                createElement.setAttribute("href", dtailUrl + product.detailUrlparameter);
                reTargetElement = reTargetElement.appendChild(createElement);
                break;
            case "img" :
                createElement = returnCreateElement(list); 
                createElement.setAttribute("src", product.imgUrl);
                reTargetElement = reTargetElement.appendChild(createElement);
                break;
            case "dd" :
                createElement = returnCreateElement(list); 
                createElement.textContent = product.productName;
                reTargetElement = reTargetElement.parentElement.parentElement.parentElement;                
                reTargetElement.appendChild(createElement);
                break;
        }

    }

    function returnCreateElement(list) {
        return document.createElement(list);
    }

    elementsProductsParsing(productList);



}
