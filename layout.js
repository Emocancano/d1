// layout.js - Tamir Edilmiş Robot 🤖

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Görev: Header'ı (Çatıyı) Yerleştir
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                console.log("✅ Robot: Çatı (Header) başarıyla yerleştirildi!");
                
                // --- İŞÇİLERİ UYANDIRMA VAKTİ ---
                
                
                // 1. Giriş Yap / Profil butonlarını ayarla (Eksik olan buydu!)
                if (typeof checkUserLoginStatus === "function") {
                    checkUserLoginStatus();
                }

                // 2. Filtreleri çalıştır
                if (typeof initializeFilters === "function") {
                    initializeFilters();
                }

                // 3. Modal (İlan Verme Ekranı) sistemini çalıştır
                if (typeof initializeModalSystem === "function") {
                    initializeModalSystem();
                } 

                // 4. Bildirim menülerini çalıştır
                if (typeof initializeHeaderActions === "function") {
                    initializeHeaderActions();
                }
                
                // 5. Kategori butonlarını çalıştır
                if (typeof initializeCategorySystem === "function") {
                    initializeCategorySystem();
                }
                
                // 6. Mobil Menüyü Çalıştır (Hamburger Düğmesi)
                if (typeof initializeMobileMenu === "function") {
                    initializeMobileMenu();
                }
            }
        })
        .catch(error => console.error("❌ Robot Hatası: Header yüklenemedi!", error));

});