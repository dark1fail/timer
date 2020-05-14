// переменные
let min = 0;
let sec = 0;
let start;


// задаем таймер
$("#save").click(function () {
    min = document.getElementById('minutes').value;
    sec = document.getElementById('seconds').value;

    output();
});


// плюс 30 сек
$("#button-1").click(function () {
    sec = Number(sec) + 30;

    output();
});


// минус 30 сек
$("#button-4").click(function () {
    sec = Number(sec) - 30;
    if (sec < 0) {
        sec = 0;
    }

    output();
});


// сбрасываем таймер
$("#button-6").click(function () {
 min = 0;
 sec = 0;

 output();
});


// старт таймера
$("#button-2").click(function () {

    start = setInterval(timer, 1000);

});


// стоп
$("#button-5").click(function () {
    clearInterval(start);
});


// функция таймера
function timer() {
    min = Number(min);
    sec = Number(sec);

    if (sec <= 0 && min <= 0) {
        clearInterval(start);
        return output();
    }

    if (sec <= 0){
        min--;
        sec = 60;
    }

    sec--;
    output()
    console.log(sec);
}


// функция вывода на экран
function output() {
    min = Number(min);
    sec = Number(sec);
    if (Number(sec) >= 60) {
        min = Number(min) + Math.floor(Number(sec) / 60);
        sec = Number(sec) - Math.floor(Number(sec) / 60) * 60;
    }
    if (Number(min) >= 60) {
        min = 59;
        sec = 59;
    }
    if (Number(min) < 10) {
        min = "0" + String(min);

    }
    if (Number(sec) < 10) {
        sec = "0" + String(sec);

    }
    return document.getElementById('timer').innerHTML=String(min) + ":" + String(sec);
}