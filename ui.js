/* =========================================
   🎨 UI.JS - Arayüz, Dark Mode ve Modallar
   ========================================= */

// --- DARK MODE ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('verde_theme') || 'light';
    applyTheme(savedTheme);
});

function applyTheme(themeName) {
    if (themeName === 'auto') {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        themeName = isSystemDark ? 'dark' : 'light';
    }
    if (themeName === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// --- BİLDİRİMLER (HEADER) ---
function initializeHeaderActions() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const markAllReadBtn = document.querySelector('.mark-all-read');

    if (notificationBtn && notificationDropdown) {
        notificationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            notificationDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
                notificationDropdown.classList.remove('active');
            }
        });

        if (markAllReadBtn) {
            markAllReadBtn.addEventListener('click', () => {
                document.querySelectorAll('.notification-item.unread').forEach(item => {
                    item.classList.remove('unread');
                });
                const badge = notificationBtn.querySelector('.notification-badge');
                if (badge) badge.style.display = 'none';
            });
        }
    }
}

// --- MODAL SİSTEMİ (İLAN VER PENCERESİ) ---
function initializeModalSystem() {
    const modal = document.getElementById('quickPostModal');
    const postAdButtons = document.querySelectorAll('.post-ad-button, .post-ad-fab');
    const closeModal = document.querySelector('.close-modal');
    
    if (modal) {
        postAdButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
    
    // Kategori Seçim Mantığı
    const categoryButtons = document.querySelectorAll('.category-btn');
    const backButton = document.getElementById('backToCategory');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryStep = document.getElementById('categoryStep');
            const formStep = document.getElementById('formStep');
            if(categoryStep && formStep) {
                categoryStep.classList.remove('active');
                formStep.classList.add('active');
            }
        });
    });
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            const categoryStep = document.getElementById('categoryStep');
            const formStep = document.getElementById('formStep');
            if(categoryStep && formStep) {
                categoryStep.classList.add('active');
                formStep.classList.remove('active');
            }
        });
    }
}

// --- GENEL BİLDİRİM (TOAST) ---
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    // Stil (style.css'te olması daha iyi ama garanti olsun)
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white; padding: 1rem; border-radius: 8px; z-index: 10000; animation: slideIn 0.3s;
    `;
    document.body.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 3000);
}

/* =========================================
   📱 MOBİL MENÜ KONTROLÜ
   ========================================= */

function initializeMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.header-actions');

    if (toggleBtn && menu) {
        // Butona tıklanınca
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Tıklamanın dışarı taşmasını engelle
            menu.classList.toggle('active');
            
            // İkonu değiştir (Çizgi <-> Çarpı)
            const icon = toggleBtn.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Menü açıkken boşluğa tıklanırsa kapat
        document.addEventListener('click', (e) => {
            if (menu.classList.contains('active') && !menu.contains(e.target)) {
                menu.classList.remove('active');
                // İkonu düzelt
                const icon = toggleBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
        });
    }
}
// --- AYARLAR SAYFASI GEÇİŞLERİ ---
function initializeSettingsNavigation() {
    const navItems = document.querySelectorAll('.settings-nav .nav-item');
    const sections = document.querySelectorAll('.settings-section');

    // Eğer ayarlar sayfasında değilsek (navItems yoksa) hiç çalışma
    if (navItems.length === 0) return;

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Sayfanın zıplamasını engelle

            // 1. Önce hepsinden 'active' sınıfını kaldır (Pasif yap)
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // 2. Tıklanan düğmeyi 'active' yap (Yeşil olsun)
            this.classList.add('active');

            // 3. Hedeflenen içeriği bul ve göster
            // (href="#guvenlik" ise id="guvenlik" olanı bulur)
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}