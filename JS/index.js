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

for(var i = 0; i < 10;i+=1) {
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

/* var 1 = 0
do {
    console.log("Nama") //input angka
    i+=1
} while(i < 10) // cek tipe data kalau != Number
 */

/*while(i < 10) {

}
*/