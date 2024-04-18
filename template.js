//Single Comment

/*
Multiple Comment
*/

//window.
//document.
console.log("Merhabalar");
window.console.log("Window Console Log");
console.warn("console.warn");
console.info("console.info");
console.error("console.error");
// alert("Alert");
// window.alert("Alert");

//Variable
/*
var : global değişken
let : local değişken
const : local değişken Değer değiştirilemez. (Constant)
*/

// var,let, const
var Name = "Atakan";
console.log("İsim: " + Name);

let CompanyName = "Berga";
console.warn(CompanyName);

let CompanyName2 = "Berga";
CompanyName2 = "Berga Danismanlik";
console.log(CompanyName2);

const CompanyName3 = "Anomim";
// CompanyName3 = "Limited";
console.log(CompanyName3);

//Operators
let Data = 23;
let Data2 = 5;
let Result = Data + Data2;

//Aritmatik Operatör
console.log(Data + Data2);
console.log(Data - Data2);
console.log(Data / Data2);
console.log(Result);

//Karşılaştırma Operatörleri
console.log(Data > Data2);
console.log(Data < Data2);
console.log(Data === Data2);
console.log(Data == Data2);
console.log(Data !== Data2);

//Atama Operatörleri
const data1 = 10,
  data2 = "10";
console.log(data1 == data2); // Sadece türüne bakıyor ve true dönüyor
console.log(data1 === data2); // Hem içine hem türüne bakıyor : false

//Mantıksal Operatör
const data3 = true,
  data4 = false;
console.log(data3 && data4); //ve yapısı
console.log(data3 || data4); //veya yapısı

//Prompt
// const userData = prompt("Lütfen Adınızı Giriniz!");
// console.log(userData);
//alert("Merhaba. " + kullaniciAdi + "!");
