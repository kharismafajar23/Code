const countdown = () => {
  const waktuPernikahan = new Date('November 12, 2023 08:00:00').getTime();
  const waktuSekarang = new Date().getTime();
  const jarakWaktu = waktuPernikahan - waktuSekarang;

  const detik = 1000;
  const menit = detik * 60;
  const jam = menit * 60;
  const hari = jam * 24;

  const teksHari = Math.floor(jarakWaktu / hari);
  const teksJam = Math.floor((jarakWaktu % hari) / jam);
  const teksMenit = Math.floor((jarakWaktu % jam) / menit);
  const teksDetik = Math.floor((jarakWaktu % menit) / detik);

  document.getElementById('hari').innerHTML = teksHari;
  document.getElementById('jam').innerHTML = teksJam;
  document.getElementById('menit').innerHTML = teksMenit;
  document.getElementById('detik').innerHTML = teksDetik;
};

setInterval(countdown, 1000);

const popup = document.querySelector('.popup');
const inputNama = document.getElementById('input_nama');
const btnPopUp = document.getElementById('btnPopUp');
const namaPengunjung = document.getElementById('nama');
let namaLocal;

window.onload = function () {
  setTimeout(function () {
    popup.style.visibility = 'visible';
  }, 1500);

  btnPopUp.addEventListener('click', (e) => {
    if (inputNama.value != '') {
      popup.style.visibility = 'hidden';
      sessionStorage.setItem('nama', inputNama.value);
      namaLocal = sessionStorage.getItem('nama');
      namaPengunjung.innerHTML = namaLocal;
    }
    e.preventDefault();
  });
};
