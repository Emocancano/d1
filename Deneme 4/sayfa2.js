// sayfa2.js - 2. sayfa için özel JS

document.addEventListener('DOMContentLoaded', function() {
    // Örnek: İlanı Gör butonuna tıklanınca detay sayfasına yönlendir
    document.querySelectorAll('.view-ad-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'ilan-detay.html';
        });
    });

    // Sayfalama aktif butonunu vurgula
    var activePage = document.querySelector('.pagination .page-number.active');
    if (activePage) {
        activePage.style.fontWeight = 'bold';
    }
});
