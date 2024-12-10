// Latihan 1
// Buatkan array yang isi nya nama nama buah : "Apel", "Pisang", "Ceri"
// tampilkan elemen kedua dari array diatas

let buah = ["Apel", "Pisang", "Ceri"];
console.log(buah[1]);

// Latihan 2
// Tambah buah jeruk ke dalam array buah
// cetak perubahan

buah.push("Jeruk");
console.log(buah);

// Latihan 3
// Hapus elemen terakhir dari array buah
// cetak perubahan

buah.pop();
console.log(buah);

// Latihan 4
// hitung jumlah elemen dalam array buah
// cetak hasilnya

let panjangArray = buah.length;
console.log(panjangArray);

// Latihan 5
// gabung elemen array buah dengan array sayuran yang isi nya "Wortel", "Brokoli"
// cetak hasilnya

let sayuran = ["Wortel", "Brokoli"];
let gabungan = buah.concat(sayuran);
console.log(gabungan);
