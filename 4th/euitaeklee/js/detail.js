window.onload = function() {

    let parameterSplit = location.href.split("?")[1].split("&");

    parameterSplit = decodeURI(decodeURIComponent(parameterSplit));

    //parameterSplit = parameterSplit.replace(",","");

    //parameterSplit = parameterSplit.split("=");

    console.log(parameterSplit);

}