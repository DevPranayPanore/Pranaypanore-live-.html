let getnumber = 0
document.getElementById("display").innerHTML = 0;
let num1 = 0;
let num2 = 0
const clickOne = (text) => {
    document.getElementById("display").innerHTML += text;
    getnumber += text;
    additionOn = false;
    if (text == '+') {
        additionOn = true;
    }
    if (additionOn) {
        num1 = getnumber;
    }
    if (text != '+') {
        num2 = getnumber;
    }
    console.log(getnumber);
    console.log("num 1 :" + num1);
    console.log("num 2 :" + num2);
}

const allclear = () => {
    document.getElementById("display").innerHTML = " ";
    getnumber = ""
    num1 = 0;
    num2 = 0;
}

const add = () => {

}