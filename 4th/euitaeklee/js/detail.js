window.onload = function() {

    let parameterSplit = location.href.split("?")[1].split("&");

    function objectParameter(parameter) {
        parameter = parameterSplit.reduce((parameter, cursor) => {
            parameter[cursor.split("=")[0]] = decodeURI(decodeURIComponent(cursor.split("=")[1]));
            return parameter;
        }, {});
        return parameter;
    }

    function valueInput() {

        parameterSplit = objectParameter(parameterSplit);
        
        let targetTitle = document.querySelectorAll(".coffee_type h3")[0];
        let targetImg = document.querySelectorAll(".coffee_detail_container .coffee_detail_img img")[0];
        let targetProductName = document.querySelectorAll(".coffee_detail_container .coffee_detail h4")[0];
        let targetDeatailAllergy = document.querySelectorAll(".coffee_detail_container .coffee_detail .coffee_detail_allergy p")[0];

        targetTitle.textContent = parameterSplit.type;
        targetImg.setAttribute("src", parameterSplit.imgUrl);
        targetProductName.textContent = parameterSplit.productName;
        targetDeatailAllergy.textContent = "알레르기 유발요인 : " + parameterSplit.allergy;

    }

    valueInput();
}