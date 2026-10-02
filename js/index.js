// 1. Ambil elemen
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// 2. Fungsi buka
function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  hamburger.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
}

// 3. Fungsi tutup
function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

// 4. Fungsi toggle (dipanggil pas hamburger diklik)
function toggleSidebar() {
  if (sidebar.classList.contains("active")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// 5. Event listener
hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

// 6. Auto-close pas resize ke desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    closeSidebar();
  }
});

// 7. Auto-close pas salah satu menu diklik
const sidebarLinks = sidebar.querySelectorAll("a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

// ===== SLIDESHOW HERO =====
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
const slideInterval = 5000; // 5 detik

function nextSlide() {
  // Hapus 'active' dari slide sekarang
  slides[currentSlide].classList.remove("active");

  // Naik ke slide berikutnya (balik ke 0 kalau udah di akhir)
  currentSlide = (currentSlide + 1) % slides.length;

  // Tambah 'active' ke slide baru
  slides[currentSlide].classList.add("active");
}

// Jalanin tiap 5 detik
setInterval(nextSlide, slideInterval);
