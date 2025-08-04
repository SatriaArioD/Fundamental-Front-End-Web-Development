//INTEGRASI HTML JSS

//console.log(1+3)
//alert("Sukses Belajar JS")
//prompt("Masukkan Umur Anda")

/*
var inputan;
let input;

// let tidak bisa di deklarasikan dua kali

const PHI = 3.14;

2 * Inputan * PHI
/*

//CONDITIONAL STATEMENT

/*
let nilai = 50
let perilaku = "Baik"


if (nilai <60) {
if (perilaku === "Baik") {
    console.log("Biasaa Prestasi")
} 
else {
  console.log("Kurang Prestasi")
}
} else if (nilai <=70) {
  console.log("Biasa Prestasi")
  
}
else {
  console.log("Prestasi")
} 
*/

/*
if (nilai < 60 && perilaku !=="Baik") {
  console.log("Kurang Prestasi")
} else if (nilai <= 70) {
  console.log("Biasa Prestasi")
} else {
  console.log("Prestasi")
}
*/

/*let nilai = 100
let perilaku = "Baik"

if (nilai < 60 || perilaku !=="Baik") {
  console.log("Kurang Prestasi")
} else if (nilai <= 70) {
  console.log("Biasa Prestasi")
} else {
  console.log("Prestasi")
}
*/

/*
let nilai = 100
let perilaku = "Kurang Baik"

switch (perilaku) {
  case "Kurang Baik" :
    console.log("Kurang Prestasi")
    break
  case "Baik" :
    console.log("Prestasi")
    break
  default :
    console.log("Error Program")
}
*/

/*
let nilai = 60
let perilaku = "Baik"

let prestasiMurid = nilai > 70 ? "Berprestasi" : "Kurang Berprestasi"
console.log(prestasiMurid)

// console.log(nilai < 70 ? "Kurang Prestasi" : "Berprestasi")
// console.log("Kurang Prestasi")
*/

// ARRAY

/*
let mahasiswa = [60, 70, 80, 90]

// mahasiswa.push(100)
// mahasiswa.pop() 
// mahasiswa.unshift(50) 
// mahasiswa.shift() 


//console.log(mahasiswa[1]) 
console.log(mahasiswa.length)
*/

//LOOPING

/* for(var i = 0; i < 10;i+=1) {
  console.log("Nama") 
  }

let mahasiswa = ["Agus", "Bidin", "Perdi"]
let nilai = [70, 80, 90]

for(var i = 0; i < mahasiswa.length;i+=1) {
//    console.log(mahasiswa[i])
    console.log(mahasiswa[i] + " " + nilai[i])
 }

for( nama of mahasiswa) {
    console.log(nama)
}

*/

/* var 1 = 0
do {
    console.log("Nama") //input angka
    i+=1
} while(i < 10) // cek tipe data kalau != Number
 */

/*while(i < 10) {

}
*/

/*
// OBJECT

//nama
//jenis
//penambahan
//pengurangan


let kalkulator = {
  nama: "kalkulator", 
  jenis: "jadul", 
  penambahan: function(a,b) {return a+b},
  pengurangan: function(a,b){return a-b},
}
// console.log(kalkulator.nama)
// console.log(kalkulator["jenis"])
// console.log(kalkulator["penambahan"(3,4)])



let kulkas = {
    nama: "kulkas A",
    pendingin: {
          nama: "pendingin A", 
          dinginin: function() {console.log("brrrrrr")},
    }
}

console.log(kulkas.pendingin.nama)
*/

// DOM I

/*
// console.log(document.getElementById("input"))
// console.log(document.getElementsByClassName("text"))
// console.log(document.querySelector("p")) // << untuk satu element
console.log(document.querySelectorAll("p")[1]) // << untuk semua element dan pilih array
*/

// DOM 2
/*
let p = document.querySelector("p")

// console.log(p.innerHTML)
// console.log(p.innerText)
// console.log(p.innerText = "Coding is Fun")
// console.log(p.innerHTML = "<b>Coding</b> Is Fun")

// console.log(p.style.backgroundColor="red")
// console.log(p.classList.remove("text"))  << Untuk remove class
console.log(p.classList.add("pindah")) // << Untuk menambah class baru
*/

// DOM EVENTS

let p = document.querySelector("p")

let button = document.querySelector("button")
let input = document.querySelector("input")

let clickHandler = function () {
  let isi = input.value
  p.innerText = isi
}

input.addEventListener('input', clickHandler) // <<hasil input form mengikuti

button.addEventListener('click', clickHandler)

/*button.addEventListener('click', function () {
  let isi = input.value
  p.innerHTML = isi
  // p.innerText = isi
})
*/

