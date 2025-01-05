// inisiasi 3 variabel
// variabel pertanyaan dengan value "Apa nama ibukota Indonesia"
// variabel jawaban dengan value "Jakarta"
// variabel jawabanUser untuk menyimpan jawaban pengguna
// gunakan prompt untuk meminta jawaban dari pengguna
// kalau jawaban benar silahkan cetak "Benar, Kamu memang keren"
// kalau jawaban salah "Yah, kamu kurang tepat nih!"

let pertanyaan = "Apa nama ibukota Indonesia?";
let jawaban = "Jakarta";
let jawabanUser = prompt(pertanyaan);

if (jawabanUser === "Jakarta") {
  alert("Wuahh kamu benar, kamu berhak dapat hadiah 100 juta!");
} else {
  alert("Wah, kayanya kamu kurang tepat nih!");
}
