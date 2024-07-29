const namaInput = document.getElementById('nama');
const mulaiButton = document.getElementById('mulai');
const hasilDiv = document.getElementById('hasil');
const loadingDiv = document.getElementById('loading');
let clickCount = 0;
let namaSebelumnya = ""; 

const roleOptions = [
  { teks: "Esempeh", gambar: "esempeh.jpg", deskripsi: "Bocah puber yang suka jokes politik padahal ngerti aja enggak😂. Selain itu role ini juga penikmat konten brainrot. seperti skipidi toilet, gyatt, sigma, dll." },
  { teks: "Penyelam Handal", gambar: "penyelam.jpg", deskripsi: "Menyelam akun media sosial seseorang sampai inti bumi." },
    { teks: "Koboy Krah Krah", gambar: "koboy.jpg", deskripsi: "Kamu adalah koboy, tugasmu adalah memberikan bunga ke akun seseorang. sayang sekali role ini sudah punah akibat di benned oleh seorang moster bernama Mark" },
  { teks: "NPC", gambar: "npc.jpg", deskripsi: "Kamu hanyalah pelengakap di dunia ini. itu saja" },
    { teks: "Tukang Share Meme", gambar: "tsm.jpg", deskripsi: "Tugas mu adalah membahagiakan para pengikut/fl mu dengan cara mengshare meme. meskipun kamu tidak pandai membuat meme" },
    { teks: "Artis (Sepuh) Pesbuk", gambar:"artis.jpg", deskripsi: "Kamu adalah artis, yang memiliki belasan pengikut dan setip post mendapatkan ratusan bahkan ribuan like. (role inu juga suka merendah sampai inti bumi)" },
      { teks: "Tukang Drama", gambar: "drama.jpg", deskripsi: "role Tukang Drama merupakan istilah untuk orang yang gemar melebih-lebihkan masalah atau menciptakan masalah agar mendapat perhatian. Contonya Miya Desu" },
        { teks: "Tukang Gorengan Rek", gambar: "Rek.jpg", deskripsi: "Musuh alami Tukang Drama. role ini bertugas menyebarkan drama dan menggorengnya sampai klarifikasi/tutup akun" },
          { teks: "Kurator Meme", gambar: "kurator.jpg", deskripsi: "role ini merupakan role yang menghibur dengan meme buatannya role ini juga ada memiliki role tambahan yaitu artis pesbuk, ketika meme buatanya terkenal. Contoh: Renkardasi" },
            { teks: "badut", gambar: "badut.jpg", deskripsi: "role ini berbagai macam. Sama Dengan Tukang Drama atau role ini juga bisa jadi tukang lawak ke gebetannya" },
  

];

mulaiButton.addEventListener('click', () => {
  const nama = namaInput.value.trim();

  if (!nama) {
    alert("Masukkan nama kamu dulu!");
    return;
  }

  // Hapus semua spasi dari nama sebelum membandingkan
  const namaTanpaSpasi = nama.replace(/\s/g, '');

  // Reset clickCount hanya jika nama tanpa spasi berbeda dari sebelumnya
  if (namaTanpaSpasi !== namaSebelumnya) {
    clickCount = 0;
  }

  if (clickCount >= 1) {
    alert("Kamu sudah mencoba sekali, gunakan nama lain");
    return;
  }

  loadingDiv.style.display = 'block';
  hasilDiv.style.display = 'none';

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * roleOptions.length);
    const role = roleOptions[randomIndex];

    hasilDiv.innerHTML = `
      <h2>${nama}, kamu adalah ${role.teks}</h2>
      <img src="${role.gambar}" alt="${role.teks}">
      <p>${role.deskripsi}</p>
    `;

    loadingDiv.style.display = 'none';
    hasilDiv.style.display = 'block';
    clickCount++;
    namaSebelumnya = namaTanpaSpasi;
  }, 1000);
});
