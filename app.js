// var zapros = +prompt('9 / 3 = ?')
// console.log('9 / 3 =  ' + zapros + '; тугри жавоб: 3');
// alert('9 / 3 = ' + zapros + '; тугри жавоб: 3')

var zapros = +prompt('9 / 3 = ?')
if (zapros == 3){
    console.log('siz togri javob kiritdingiz')
    alert('siz togri javob kiritdingiz')
}
else if ( zapros > 3){
    console.log('siz nogri javob kiritdingiz');
    alert('siz nogri javob kiritdingiz')
}
else if (zapros < 3){
    console.log('siz nogri javob kiritdingiz');
    alert('siz nogri javob kiritdingiz')
}

var num = +prompt('5 * 5 = ?')
if (num == 25) {
    console.log('siz togri javob kiritdingiz');
    alert('siz togri javob kiritdingiz')
}
else if (num > 25) {
    console.log('siz nogri javob kiritdingiz. togri javob 25');
    alert('siz nogri javob kiritdingiz. togri javob 25')
}
else if (num < 25) {
    console.log('siz nogri javob kiritdingiz. togri javob 25');
    alert('siz nogri javob kiritdingiz. togri javob 25')
}
else{
    console.log('siz sondan boshqa narsa kiritdingiz. togri javob 25');
    alert('siz sondan boshqa narsa kiritdingiz. togri javob 25')
}


var yosh = +prompt('yoshingizni kiriting')
if (yosh <= 18){
    console.log('Yoshsiz. Oqishingiz kerak');
    alert('Yoshsiz. Oqishingiz kerak')
}
else if (yosh <= 50) {
    console.log('Ishlashingiz kerak');
    alert('Ishlashingiz kerak')
}
else if(yosh <= 59){
    console.log('Yaqinda pensiyaga chiqasiz');
    alert('Yaqinda pensiyaga chiqasiz')
}
else if ( yosh <= 150){
    console.log('Pensionerga oxshaysiz, hali tirik bolsangiz :)');
    alert('Pensionerga oxshaysiz, hali tirik bolsangiz :)')
}
else {
    console.log('Nimadir notogri ketib qoldi');
    alert('Nimadir nogri ketib qoldi')
}


var a = +prompt('1-sonni kiriting')
var b = +prompt('2-sonni kiriting')
var c = +prompt('3-sonni kiriting')
if(a > b && a < c || a < b && a > c ){
    console.log('orta qiymat' +  a);
    alert('Orta qiymat ' + a)}
else if(b > a && b < c || b < a && b > c ){
    console.log('orta qiymat' + b);
    alert('Orta qiymat ' + b)}
else if(c > b && c < a || c < b && c > a ){
    console.log('orta qiymat' + c);
    alert('Orta qiymat ' + c)}


var yosh = +prompt('tugilgan yillingizni kiriting')
var currentYear = 2021
var age = currentYear - yosh
console.log(age);
alert('sizni yoshingiz ' + age + ' da')
