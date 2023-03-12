let firstName = prompt("Isminizi giriniz:")
let nameSpan = document.querySelector("#myName")

nameSpan.innerHTML = firstName

let aSaat = document.querySelector("#myClock")

function format(saatcek) {
    var bSaat = saatcek.toString();
    if (bSaat.length == 1) {
        return "0" + bSaat;
    } else {
        return bSaat;
    }
}

let myDate = document.querySelector("#myDate")
var date = new Date()
var ay = date.getMonth() + 1
var gün = date.getDay()
let day;

if (gün == 0) {
    day = "Pazar"
} else if (gün == 1) {
    day = "Pazartesi"
} else if (gün == 2) {
    day = "Salı"
} else if (gün == 3) {
    day = "Çarşamba"
} else if (gün == 4) {
    day = "Perşembe"
} else if (gün == 5) {
    day = "Cuma"
} else if (gün == 6) {
    day = "Cumartesi"
}

myDate.innerHTML = date.getDate() + "/" + ay + "/" + date.getFullYear() + "<br>" + day

function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
    var tarih = new Date();
    var gun = tarih.getDate()
    var saat = tarih.getHours(); //Burada saati çekiyoruz.
    var dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
    var saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
    aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye); //Burada ekranımıza çıktımızı veriyoruz.
}
setInterval(saatGuncelleme, 1000);


