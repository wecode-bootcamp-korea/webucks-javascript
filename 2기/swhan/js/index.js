

const iptId = document.getElementById('ipt-id'); // id 입력란
const iptPw = document.getElementById('ipt-pw'); // pw 입력란
const btnLogin = document.getElementById('btn-login'); // login 버튼


// id 입력란 이벤트 bind
if( !isNull(iptId) ){
    iptId.addEventListener('keyup', (event) => {
        const strId = iptId.value;
        if (strId.indexOf('@') > -1 && strId.length >= 8) {
            btnLogin.style.backgroundColor = '#60ADED';
            btnLogin.disabled = false;
        } else {
            btnLogin.style.backgroundColor = '#ADD3EA';
            btnLogin.disabled = true;
        }
    });
}


/**
 * @param any
 * @returns boolean
 * @description param의 null 여부를 체크해서 boolean 값을 return한다.
 */
function isNull(param) {
    if (param !== null && param !== undefined) {
        return false;
    } else {
        return true;
    }
}

/**
 * 
 */
function nextPage() {
    console.log(123);
    location.href = './coffeeList.html';
}