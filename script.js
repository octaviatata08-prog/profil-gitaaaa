
// Mengambil elemen navigasi
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu HP
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const menuTerbuka = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuTerbuka);

    if (menuTerbuka) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Menutup menu setelah memilih halaman
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
