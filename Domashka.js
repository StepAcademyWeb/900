alert("privet!!");//задание 1

let myAge, age;//задание 2
age = 8;
myAge = age;
alert(myAge);

const obj_1 = 3, obj_2 = 5, obj_3 = 8;//задание 3
let sum_obj_1 = obj_1 + obj_2 + obj_3;
alert(sum_obj_1);
let ob_1 = 2, ob_2 = 3, ob_3 = 4;
let sum_obj_2 = ob_1 + ob_2 + ob_3;
alert(sum_obj_2);
alert(sum_obj_1 % sum_obj_2);

let my_Age = 365;//задание 4
alert(`в году ${my_Age} дней`);

alert("здравствуй пользователь!");//задание 5
let obj_age = prompt("сколько тебе лет?");
let ob_age = confirm(`тебе точно ${obj_age} лет?`);
if(ob_age == true){
    alert(`пользователю ${obj_age} лет`);
}
else{
    alert("чет ты старый бредишь");
}

/*задание 6*/ 
//5 > 4 ==> true
// "ананас" > "яблоко" ==> false
//"2" > "12" ==> false
// undefined == null ==> true
//undefined === null ==> false
//null == "\n0\n" ==> true

let name_obj = prompt("пользователь, ты Иван?");//задание 6
let age_Ivan = prompt("сколько тебе лет?");
if(name_obj == "Иван"){
    alert("здарова, Иван!!");
}
else {
    alert("не, нам нужны только Иваны!!");
}

if(age_Ivan < 18){
    alert("иди домой, Иван!");
}
else if(name_obj == "Иван" && age_Ivan == 30){
    alert("заходи, нам нужны только 30-ти летние Иваны!");
}
else {
    alert("жаль, что ты не 30-ти летний Иван");
}

let kvartal = prompt("укажи месяц");//задание 7
if(kvartal == "Январь" || kvartal == "Февраль" || kvartal == "Март"){
    alert("это 1-й квартал");
}
if(kvartal == "Апрель" || kvartal == "Май" || kvartal == "Июнь"){
    alert("это 2-й квартал");
}
if(kvartal == "Июль" || kvartal == "Август" || kvartal == "Сентябрь"){
    alert("это 3-й квартал");
}if(kvartal == "Октябрь" || kvartal == "Ноябрь" || kvartal == "Декабрь"){
    alert("это 4-й квартал");
}

let left = prompt("введите первое число");//задание 8
let right = prompt("введите второе чисо");
let sum = left + right;
let sub = left - right;
let div = left / right;
let multi = left * right;
alert(`${left} + ${right} = ${sum}`);
alert(`${left} - ${right} = ${sub}`);
alert(`${left} / ${right} = ${div}`);
alert(`${left} * ${right} = ${multi}`);