/* =========================================
   🏠 LISTINGS.JS - İlan Verileri ve Detayları
   ========================================= */

// --- 1. MERKEZİ VERİ HAVUZU (Tüm site buradan beslenir) ---
const listingsData = {
    emlak: {
        titles: ['Lüks Villa Deniz Manzaralı', 'Modern Daire Merkez', 'Bahçeli Müstakil Ev', 'Penthouse Şehir Manzarası', 'Yeni Yapı Residence', 'Klasik Taş Ev', 'Studio Daire', 'Dubleks Villa'],
        prices: ['₺850.000', '₺1.250.000', '₺2.100.000', '₺950.000', '₺1.750.000', '₺680.000', '₺420.000', '₺3.200.000'],
        locations: ['Beşiktaş, İstanbul', 'Çankaya, Ankara', 'Konak, İzmir', 'Muratpaşa, Antalya', 'Osmangazi, Bursa', 'Seyhan, Adana'],
        features: ['150m²', '3+1', '2. Kat'], 
        desc: "Bu mülk, şehrin en gözde lokasyonlarından birinde yer almaktadır. Geniş yaşam alanları, modern mimarisi ve ulaşım kolaylığı ile hem yatırım hem de oturum için eşsiz bir fırsat sunuyor."
    },
    vasita: {
        titles: ['BMW 520i Executive', 'Volkswagen Golf GTI', 'Mercedes C180 AMG', 'Audi A4 Quattro', 'Honda Civic RS', 'Toyota Corolla Hybrid', 'Ford Focus ST', 'Hyundai i30'],
        prices: ['₺2.485.000', '₺1.325.000', '₺2.520.000', '₺2.445.000', '₺1.385.000', '₺1.295.000', '₺1.275.000', '₺1.315.000'],
        locations: ['Kadıköy, İstanbul', 'Keçiören, Ankara', 'Bornova, İzmir', 'Kepez, Antalya', 'Nilüfer, Bursa'],
        features: ['50.000 KM', 'Benzin', 'Otomatik'],
        desc: "Aracımız yetkili servis bakımlıdır. Değişen parçası bulunmamaktadır. Sadece sol ön çamurlukta lokal boya vardır. Motor ve yürüyen aksamı kusursuzdur."
    },
    elektronik: {
        titles: ['MacBook Pro M3', 'Gaming PC RTX 4070', 'iPhone 15 Pro Max', 'Samsung OLED TV', 'PlayStation 5', 'iPad Air M2', 'AirPods Pro', 'Dell XPS 13'],
        prices: ['₺65.000', '₺45.000', '₺52.000', '₺38.000', '₺18.500', '₺24.000', '₺8.500', '₺35.000'],
        locations: ['Beyoğlu, İstanbul', 'Çankaya, Ankara', 'Karşıyaka, İzmir'],
        features: ['Sıfır', 'Garantili', 'Kutusunda'],
        desc: "Ürün sıfır ayarındadır, çok az kullanılmıştır. Kutusu, faturası ve tüm aksesuarları tamdır. Garantisi devam etmektedir."
    },
    ev_esyasi: {
        titles: ['Chester Koltuk', 'Yemek Masası', 'Yatak Odası Takımı', 'Buzdolabı No-Frost', 'Çamaşır Makinesi', 'Smart TV Ünitesi', 'Mutfak Dolabı', 'Berjer Koltuk'],
        prices: ['₺12.500', '₺8.750', '₺15.200', '₺18.900', '₺7.650', '₺4.200', '₺22.000', '₺5.800'],
        locations: ['Fatih, İstanbul', 'Altındağ, Ankara', 'Konak, İzmir'],
        features: ['Yeni Gibi', 'Sorunsuz', 'Nakliye Alıcıya Ait'],
        desc: "Ev değişikliği nedeniyle satılıktır. Hiçbir deformasyonu yoktur. Temiz kullanılmıştır."
    }
};

// --- 2. YENİ EKLENEN: DETAY SAYFASINI DOLDURMA ---
function loadAdDetails() {
    // URL'den ID ve Type bilgisini al (Örn: ?id=2&type=vasita)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const type = urlParams.get('type');

    // Eğer ID veya Type yoksa (ana sayfadaysak) dur.
    if (id === null || type === null) return;

    // Veriyi Çek
    const category = listingsData[type] || listingsData.emlak;
    
    // Verileri HTML elementlerine yerleştir
    // Güvenlik için index kontrolü (dizi dışına çıkmasın)
    const safeIndex = id % category.titles.length; 
    
    // 1. Başlık
    document.getElementById('detail-title').textContent = category.titles[safeIndex];
    
    // 2. Fiyat
    document.getElementById('detail-price').textContent = category.prices[safeIndex];
    
    // 3. Konum
    const location = category.locations[id % category.locations.length];
    document.getElementById('detail-location').textContent = location;
    
    // 4. Açıklama
    document.getElementById('detail-desc').textContent = category.desc;

    // 5. Özellikler (Kutucuklar)
    const featuresContainer = document.getElementById('detail-features');
    if (featuresContainer) {
        let featuresHTML = '';
        category.features.forEach(feat => {
            featuresHTML += `
                <div class="feature">
                    <i class="fas fa-check-circle" style="color:var(--primary)"></i>
                    <span>${feat}</span>
                </div>`;
        });
        featuresContainer.innerHTML = featuresHTML;
    }

    // 6. Resim
    const imgElement = document.getElementById('detail-image');
    if (imgElement) {
        // Kategoriye göre rastgele ama sabit bir resim seçelim
        const photos = {
            emlak: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
            vasita: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80',
            elektronik: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
            ev_esyasi: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
        };
        imgElement.src = photos[type] || photos.emlak;
    }
}

// --- 3. İLAN KARTI OLUŞTURMA (VİTRİN İÇİN) ---
function createListingCard(type, index, page, viewMode = 'grid') {
    const category = listingsData[type];
    
    // Rastgele Veriler
    const title = category.titles[index % category.titles.length];
    const price = category.prices[index % category.prices.length];
    const location = category.locations[index % category.locations.length];
    
    // Resim
    const photos = {
        emlak: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80',
        vasita: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&q=80',
        elektronik: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
        ev_esyasi: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80'
    };
    const photoUrl = photos[type] || photos.emlak;

    return `
        <article class="listing-card">
            <div class="card-header">
                <span class="listing-badge new">Yeni</span>
                <button class="favorite-button"><i class="fas fa-heart"></i></button>
            </div>
            
            <a href="ilan-detay.html?id=${index}&type=${type}" class="card-gallery" style="display:block">
                <img src="${photoUrl}" class="listing-image">
            </a>
            
            <div class="card-content">
                <div class="price">${price}</div>
                <a href="ilan-detay.html?id=${index}&type=${type}" style="text-decoration: none; color: inherit;">
                    <h3 class="title">${title}</h3>
                </a>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${location}</p>
                <div class="card-footer">
                    <span class="date">Bugün</span>
                    <a href="ilan-detay.html?id=${index}&type=${type}" class="contact-button" style="text-decoration:none; text-align:center">İncele</a>
                </div>
            </div>
        </article>
    `;
}

// --- 4. BAŞLATICI FONKSİYONLAR ---

// Vitrin Başlatıcı
function initializeListings() {
    const grid = document.querySelector('.listings-grid');
    if (grid) {
        grid.innerHTML = '';
        const types = ['emlak', 'vasita', 'elektronik', 'ev_esyasi'];
        let html = '';
        for(let i = 0; i < 8; i++) {
            html += createListingCard(types[i % 4], i, 1, 'grid');
        }
        grid.innerHTML = html;
    }
}

// Sayfa Yüklendiğinde Otomatik Çalıştır (Detay Sayfası İçin)
document.addEventListener('DOMContentLoaded', () => {
    // Eğer detay sayfasındaysak (URL'de ?id= varsa)
    if (window.location.search.includes('id=')) {
        loadAdDetails();
    }
});