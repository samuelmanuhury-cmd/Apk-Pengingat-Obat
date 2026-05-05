// Splash screen delay
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2500);

// Data obat
let daftarObat = [];

function tambahObat() {
  let nama = prompt("Masukkan nama obat:");
  let jam = prompt("Masukkan jam minum (contoh: 08:00)");

  if (nama && jam) {
    daftarObat.push({ nama, jam });
    render();
  }
}

function render() {
  let list = document.getElementById("list-obat");
  list.innerHTML = "";

  daftarObat.forEach((obat, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${obat.nama} - ${obat.jam}
      <button onclick="hapus(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function hapus(index) {
  daftarObat.splice(index, 1);
  render();
}