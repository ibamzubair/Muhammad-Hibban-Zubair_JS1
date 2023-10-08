// Fungsi untuk menghitung faktorial
function hitungFaktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * hitungFaktorial(n - 1);
    }
  }
  
  // Menggunakan switch case untuk menentukan hari dalam seminggu
  function tampilkanHari(hari) {
    switch (hari) {
      case 1:
        console.log("Senin");
        break;
      case 2:
        console.log("Selasa");
        break;
      case 3:
        console.log("Rabu");
        break;
      case 4:
        console.log("Kamis");
        break;
      case 5:
        console.log("Jumat");
        break;
      case 6:
        console.log("Sabtu");
        break;
      case 7:
        console.log("Minggu");
        break;
      default:
        console.log("Hari tidak valid");
    }
  }
  
  // Menggunakan for statement untuk mencetak bilangan prima
  function cetakBilanganPrima(max) {
    for (let i = 2; i <= max; i++) {
      let isPrima = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrima = false;
          break;
        }
      }
      if (isPrima) {
        console.log(i);
      }
    }
  }
  
  // Menggunakan while do while untuk menghitung jumlah bilangan dari 1 hingga n
  function hitungJumlahBilangan(n) {
    let total = 0;
    let i = 1;
    do {
      total += i;
      i++;
    } while (i <= n);
    console.log("Jumlah bilangan dari 1 hingga " + n + " adalah " + total);
  }
  
  // Contoh pemanggilan fungsi-fungsi di atas
  console.log("Faktorial dari 5 adalah " + hitungFaktorial(5));
  tampilkanHari(3);
  console.log("Bilangan prima dari 2 hingga 20 adalah:");
  cetakBilanganPrima(20);
  hitungJumlahBilangan(10);