// Single Comment

// /*
// Multiple Comment
// */

// window.
// document.
// console.log("Merhabalar");
// window.console.log("Window Console Log");
// console.warn("console.warn");
// console.info("console.info");
// console.error("console.error");
// alert("Alert");
// window.alert("Alert");

// # Variable
// /*
// var : global değişken
// let : local değişken
// const : local değişken Değer değiştirilemez. (Constant)
// */

// var,let, const
// var Name = "Atakan";
// console.log("İsim: " + Name);

// let CompanyName = "Berga";
// console.warn(CompanyName);

// let CompanyName2 = "Berga";
// CompanyName2 = "Berga Danismanlik";
// console.log(CompanyName2);

// const CompanyName3 = "Anomim";
// CompanyName3 = "Limited";
// console.log(CompanyName3);

// # Operators
// let Data = 23;
// let Data2 = 5;
// let Result = Data + Data2;

// # Aritmatik Operatör
// console.log(Data + Data2);
// console.log(Data - Data2);
// console.log(Data / Data2);
// console.log(Result);

// # Karşılaştırma Operatörleri
// console.log(Data > Data2);
// console.log(Data < Data2);
// console.log(Data === Data2);
// console.log(Data == Data2);
// console.log(Data !== Data2);

// # Atama Operatörleri
// const data1 = 10,
//   data2 = "10";
// console.log(data1 == data2); // Sadece türüne bakıyor ve true dönüyor
// console.log(data1 === data2); // Hem içine hem türüne bakıyor : false

// # Mantıksal Operatör
// const data3 = true,
//   data4 = false;
// console.log(data3 && data4); //ve yapısı
// console.log(data3 || data4); //veya yapısı

// # Prompt
// const userData = prompt("Lütfen Adınızı Giriniz!");
// console.log(userData);
// alert("Merhaba. " + kullaniciAdi + "!");

// # Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));

// # Escape Characters
// console.log("Merhaba Ben \n \t \r Atakan");
// console.log("Merhaba Ben \n \r Atakan");

//type of

// let data = 44;
// console.log(typeof data);
// let nName = "atakan";
// console.log(typeof nName);

//Instanceof

// let objectInstants = new Number(44);
// console.log(objectInstants instanceof Number);

//New : Doğdu
let dataNew = new Number(44);
console.log(dataNew);
//Null : Öldu
dataNew = null;
console.log(dataNew);
