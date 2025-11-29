/* =========================================
   🔐 AUTH.JS - Üyelik ve Giriş İşlemleri
   ========================================= */

// Kullanıcı Giriş Durumunu Kontrol Et
function checkUserLoginStatus() {
    const userData = getUserData();
    const authButtons = document.querySelector('.auth-buttons');
    const userMenu = document.querySelector('.user-menu');
    
    if (userData && userData.isLoggedIn) {
        if (authButtons) authButtons.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'block';
            updateUserInfo(userData);
        }
    } else {
        if (userMenu) userMenu.style.display = 'none';
        if (authButtons) authButtons.style.display = 'flex';
    }
}

// LocalStorage veya SessionStorage'dan veriyi al
function getUserData() {
    let userData = sessionStorage.getItem('verde_user');
    if (userData) return JSON.parse(userData);
    
    userData = localStorage.getItem('verde_user');
    if (userData) return JSON.parse(userData);
    
    return null;
}

// Header'daki İsim ve Fotoyu Güncelle
function updateUserInfo(userData) {
    const userNameElement = document.querySelector('.user-name');
    const userEmailElement = document.querySelector('.user-email');
    const userButtonSpan = document.querySelector('.user-button span');
    
    if (userNameElement) userNameElement.textContent = userData.name || 'Kullanıcı';
    if (userEmailElement) userEmailElement.textContent = userData.email || '';
    if (userButtonSpan) userButtonSpan.textContent = userData.name || 'Hesabım';
}

// Çıkış Yapma Fonksiyonu
function handleLogout() {
    if (confirm('Hesabınızdan çıkış yapmak istediğinizden emin misiniz?')) {
        localStorage.removeItem('verde_user');
        sessionStorage.removeItem('verde_user');
        
        // Bildirim göster (ui.js yüklendiyse çalışır)
        if (typeof showNotification === 'function') {
            showNotification('Başarıyla çıkış yapıldı!', 'success');
        }
        
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

// Çıkış Butonunu Dinle (Robot çağırdığında çalışır)
function initializeLogout() {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}