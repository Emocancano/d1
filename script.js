/* =========================================
   🚦 SCRIPT.JS - Ana Yönetici (Trafik Polisi)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Verde V.1.0 Sistemleri Başlatılıyor...");

    // 1. Arayüz ve Temayı Yükle (ui.js içinden)
    // (Dark mode ayarını hatırlar)
    const savedTheme = localStorage.getItem('verde_theme') || 'light';
    if (typeof applyTheme === 'function') {
        applyTheme(savedTheme);
    }

    // 2. İlanları Listele (listings.js içinden)
    // Sadece ilan vitrini olan sayfalarda çalışır
    if (document.querySelector('.listings-grid')) {
        if (typeof initializeListings === 'function') {
            initializeListings();
        }
    }

    // 3. Giriş Kontrolü (auth.js içinden)
    // (Header yüklendikten sonra layout.js de bunu çağırır ama garanti olsun)
    if (typeof checkUserLoginStatus === 'function') {
        checkUserLoginStatus();
    }

    // 4. Çıkış İşlemi (auth.js içinden)
    if (typeof initializeLogout === 'function') {
        initializeLogout();
    }
    
    // 5. Ayarlar Menüsü Navigasyonu (ui.js içinden)
    if (typeof initializeSettingsNavigation === 'function') {
        initializeSettingsNavigation();
    }
});