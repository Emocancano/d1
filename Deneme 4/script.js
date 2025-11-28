// İlan kartı oluşturma fonksiyonu
function createListingCard(type, index, page, viewMode = 'grid') {
    const listings = {
        emlak: {
            titles: [
                'Lüks Villa Deniz Manzaralı',
                'Modern Daire Merkez Lokasyon',
                'Bahçeli Müstakil Ev',
                'Penthouse Şehir Manzarası',
                'Yeni Yapı Residence',
                'Klasik Taş Ev Restore',
                'Studio Daire Yatırımlık',
                'Dubleks Bahçeli Villa'
            ],
            prices: [
                '₺850.000',
                '₺1.250.000',
                '₺2.100.000',
                '₺950.000',
                '₺1.750.000',
                '₺680.000',
                '₺420.000',
                '₺3.200.000'
            ],
            descriptions: [
                'Denize sıfır konumda, özel plajı bulunan lüks villa. Geniş bahçe, havuz ve modern tasarım.',
                'Şehir merkezinde, toplu taşımaya yakın, yeni yapı güvencesi ile modern yaşam alanı.',
                'Sessiz mahallede, geniş bahçeli, ailelere özel müstakil ev. Garaj ve depo mevcut.',
                'Şehrin en güzel manzarasına sahip penthouse. Geniş teras ve lüks detaylar.',
                'Güvenlikli site içinde, sosyal tesisleri bulunan yeni nesil yaşam alanı.',
                'Tarihi dokuyu modern konforla buluşturan, özenle restore edilmiş taş ev.',
                'Genç profesyoneller için ideal, merkezi konumda yatırım fırsatı.',
                'İki katlı villa, geniş yaşam alanları ve özel bahçe ile aile hayaliniz.'
            ],
            features: [
                '<i class="fas fa-ruler-combined"></i> {size}m²',
                '<i class="fas fa-bed"></i> {rooms}',
                '<i class="fas fa-building"></i> {floor}.kat'
            ],
            locations: [
                'Beşiktaş, İstanbul',
                'Çankaya, Ankara',
                'Konak, İzmir',
                'Muratpaşa, Antalya',
                'Osmangazi, Bursa',
                'Seyhan, Adana'
            ]
        },
        vasita: {
            titles: [
                'BMW 520i Executive',
                'Volkswagen Golf GTI',
                'Mercedes C180 AMG',
                'Audi A4 Quattro',
                'Honda Civic RS',
                'Toyota Corolla Hybrid',
                'Ford Focus ST Line',
                'Hyundai i30 N Line'
            ],
            prices: [
                '₺485.000',
                '₺325.000',
                '₺520.000',
                '₺445.000',
                '₺385.000',
                '₺295.000',
                '₺275.000',
                '₺315.000'
            ],
            descriptions: [
                'Tek elden, bakımlı, executive paket. Deri döşeme, sunroof ve navigasyon sistemi.',
                'Sporcu ruhlu sürücüler için ideal. Turbolu motor, spor süspansiyon ve racing detayları.',
                'AMG görünüm paketi, LED farlar, dijital kokpit. Prestij ve performansın buluşması.',
                'Quattro 4×4 sistem, premium ses sistemi. Her mevsim güvenli sürüş deneyimi.',
                'Type-R\'ın kardeşi, sportif tasarım. Genç ve dinamik sürücüler için mükemmel seçim.',
                'Hibrit teknoloji ile yakıt tasarrufu. Çevre dostu ve ekonomik sürüş.',
                'ST-Line paket, spor direksiyon. Hem şehir hem otoban için ideal performans.',
                'N-Line serisi, agresif tasarım. Modern teknoloji ve sportif çizgiler.'
            ],
            features: [
                '<i class="fas fa-tachometer-alt"></i> {km} KM',
                '<i class="fas fa-gas-pump"></i> {fuel}',
                '<i class="fas fa-cog"></i> {gear}'
            ],
            locations: [
                'Kadıköy, İstanbul',
                'Keçiören, Ankara',
                'Bornova, İzmir',
                'Kepez, Antalya',
                'Nilüfer, Bursa',
                'Çukurova, Adana'
            ]
        },
        elektronik: {
            titles: [
                'MacBook Pro M3 16 inch',
                'Gaming PC RTX 4070',
                'iPhone 15 Pro Max',
                'Samsung OLED 65 inch',
                'PlayStation 5 Console',
                'iPad Air M2 256GB',
                'AirPods Pro 2nd Gen',
                'Dell XPS 13 Ultrabook'
            ],
            prices: [
                '₺65.000',
                '₺45.000',
                '₺52.000',
                '₺38.000',
                '₺18.500',
                '₺24.000',
                '₺8.500',
                '₺35.000'
            ],
            descriptions: [
                'Profesyonel çalışma için M3 çip gücü. Video editing, coding ve tasarım işleri için ideal.',
                'Oyun tutkunları için özel kurulum. RTX 4070, 32GB RAM, RGB ışıklandırma sistemi.',
                'En son iPhone teknolojisi, Titanium kasasa. ProRAW fotoğraf ve 4K video çekim.',
                'Sinema kalitesinde görüntü, Quantum HDR. Smart TV özellikleri ve ses sistemi.',
                'Sony\'nin en yeni konsolu, 4K gaming. SSD hızı ve DualSense kontrolcü deneyimi.',
                'Apple Pencil uyumlu, M2 performans. Tasarımcılar ve öğrenciler için mükemmel tablet.',
                'Active Noise Cancellation, Spatial Audio. Premium ses kalitesi ve uzun batarya ömrü.',
                'Ultrabook tasarım, InfinityEdge ekran. Business ve seyahat için ideal laptop.'
            ],
            features: [
                '<i class="fas fa-microchip"></i> {processor}',
                '<i class="fas fa-memory"></i> {ram}',
                '<i class="fas fa-hdd"></i> {storage}'
            ],
            locations: [
                'Beyoğlu, İstanbul',
                'Çankaya, Ankara',
                'Karşıyaka, İzmir',
                'Konyaaltı, Antalya',
                'Osmangazi, Bursa',
                'Yüreğir, Adana'
            ]
        },
        ev_esyasi: {
            titles: [
                'Chester Koltuk Takımı',
                'Yemek Masası 6 Kişilik',
                'Yatak Odası Takımı',
                'Buzdolabı No-Frost',
                'Çamaşır Makinesi A++',
                'Smart TV Ünitesi',
                'Mutfak Dolabı Takımı',
                'Berjer Koltuk Deri'
            ],
            prices: [
                '₺12.500',
                '₺8.750',
                '₺15.200',
                '₺18.900',
                '₺7.650',
                '₺4.200',
                '₺22.000',
                '₺5.800'
            ],
            descriptions: [
                'Gerçek deri chester koltuk takımı. 3+2+1 düzeninde, vintage tarzı, rahat oturum.',
                'Masif ahşap yemek masası ve 6 sandalye. Klasik tasarım, dayanıklı malzeme.',
                'Yatak, şifonyer, komodin takımı. Modern çizgiler, geniş depolama alanları.',
                'A++ enerji sınıfı, No-Frost teknoloji. Geniş iç hacim, sessiz çalışma.',
                '9kg kapasiteli, inverter motor. Enerji tasarruflu, hızlı yıkama programları.',
                'Televizyon için özel tasarım. Kapaklı bölümler, kablo düzenleme sistemi.',
                'Modern mutfak için komple çözüm. Ankastre uyumlu, soft kapak sistemi.',
                'Tek kişilik berjer koltuk. Gerçek deri, ergonomik tasarım, dinlenme koltuğu.'
            ],
            features: [
                '<i class="fas fa-box"></i> {condition}',
                '<i class="fas fa-palette"></i> {color}',
                '<i class="fas fa-ruler"></i> {dimension}'
            ],
            locations: [
                'Fatih, İstanbul',
                'Altındağ, Ankara',
                'Konak, İzmir',
                'Muratpaşa, Antalya',
                'Yıldırım, Bursa',
                'Sarıçam, Adana'
            ]
        }
    };

    const randomize = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const category = listings[type];
    const photoIndex = ((page - 1) * 20) + index;
    
    // Gerçek kullanıcı verileri
    const realUsers = [
        { name: 'Mehmet Yılmaz', listings: 47, rating: 4.8, reviews: 89, verified: true, memberSince: '2019' },
        { name: 'Ayşe Demir', listings: 23, rating: 4.9, reviews: 156, verified: true, memberSince: '2020' },
        { name: 'Ahmet Kaya', listings: 15, rating: 4.6, reviews: 34, verified: false, memberSince: '2023' },
        { name: 'Fatma Özkan', listings: 68, rating: 4.7, reviews: 203, verified: true, memberSince: '2018' },
        { name: 'Ali Şen', listings: 12, rating: 4.5, reviews: 27, verified: true, memberSince: '2022' },
        { name: 'Zeynep Aktaş', listings: 91, rating: 4.9, reviews: 412, verified: true, memberSince: '2017' },
        { name: 'Mustafa Çelik', listings: 34, rating: 4.4, reviews: 78, verified: false, memberSince: '2021' },
        { name: 'Elif Arslan', listings: 56, rating: 4.8, reviews: 167, verified: true, memberSince: '2019' },
        { name: 'Hasan Koç', listings: 29, rating: 4.6, reviews: 93, verified: true, memberSince: '2020' },
        { name: 'Selin Aydın', listings: 18, rating: 4.7, reviews: 45, verified: false, memberSince: '2022' },
        { name: 'Emre Polat', listings: 76, rating: 4.8, reviews: 289, verified: true, memberSince: '2018' },
        { name: 'Deniz Öztürk', listings: 41, rating: 4.5, reviews: 134, verified: true, memberSince: '2019' },
        { name: 'Burak Yıldız', listings: 22, rating: 4.9, reviews: 67, verified: true, memberSince: '2021' },
        { name: 'Cansu Doğan', listings: 38, rating: 4.6, reviews: 112, verified: false, memberSince: '2020' },
        { name: 'Oğuz Taş', listings: 63, rating: 4.7, reviews: 198, verified: true, memberSince: '2018' },
    ];
    
    const currentUser = realUsers[index % realUsers.length];
    
    // Kategori-specific fake photos with names
    const getRandomPhoto = (category) => {
        const photos = {
            emlak: [
                { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format&q=80', name: 'Modern Luxe Villa with Garden' },
                { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&auto=format&q=80', name: 'Spacious Contemporary House' },
                { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&auto=format&q=80', name: 'Elegant Home with Pool' },
                { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format&q=80', name: 'Beautiful Family Residence' },
                { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop&auto=format&q=80', name: 'Modern Architectural Design' },
                { url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop&auto=format&q=80', name: 'Luxury Living Space' }
            ],
            vasita: [
                { url: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format&q=80', name: 'Premium Sports Car' },
                { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format&q=80', name: 'Luxury Sedan Vehicle' },
                { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop&auto=format&q=80', name: 'Modern Electric Car' },
                { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop&auto=format&q=80', name: 'Classic Vintage Auto' },
                { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop&auto=format&q=80', name: 'Performance Racing Machine' },
                { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&auto=format&q=80', name: 'Elegant Coupe Design' }
            ],
            elektronik: [
                { url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format&q=80', name: 'Professional MacBook Pro' },
                { url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&auto=format&q=80', name: 'High-End Gaming Laptop' },
                { url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop&auto=format&q=80', name: 'Premium Smartphone Device' },
                { url: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&h=300&fit=crop&auto=format&q=80', name: 'Wireless Audio System' },
                { url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format&q=80', name: 'Smart TV Display' },
                { url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop&auto=format&q=80', name: 'Digital Camera Equipment' }
            ],
            ev_esyasi: [
                { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&auto=format&q=80', name: 'Modern Kitchen Setup' },
                { url: 'https://images.unsplash.com/photo-1634212357677-965a42014c83?w=400&h=300&fit=crop&auto=format&q=80', name: 'Comfortable Living Room' },
                { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format&q=80', name: 'Elegant Dining Furniture' },
                { url: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop&auto=format&q=80', name: 'Designer Home Appliance' },
                { url: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=300&fit=crop&auto=format&q=80', name: 'Stylish Bedroom Set' },
                { url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop&auto=format&q=80', name: 'Premium Home Decor' }
            ]
        };
        const categoryPhotos = photos[category] || photos.emlak;
        const selectedPhoto = randomize(categoryPhotos);
        return selectedPhoto;
    };
    
    const photoData = getRandomPhoto(type);
    const photoUrl = photoData.url;
    const photoName = photoData.name;

    const badges = ['Acil', 'Yeni', 'Öne Çıkan', 'Fırsat', 'Son 24 Saat', 'Pazarlıklı'];
    const hasBadge = Math.random() > 0.5;
    
    // Sahibinden tarzı liste görünümü
    if (viewMode === 'list') {
        return `
            <div class="listing-row-sahibinden">
                <div class="row-image-container">
                    <img src="${photoUrl}" alt="${photoName}" class="row-listing-image">
                    ${hasBadge ? `<span class="row-badge-thin ${randomize(badges).toLowerCase()}">${randomize(badges)}</span>` : ''}
                    <div class="row-image-count"><i class="fas fa-images"></i> ${Math.floor(Math.random() * 8) + 3}</div>
                </div>
                
                <div class="row-content-main">
                    <div class="row-title-section">
                        <h3 class="row-title-main">${randomize(category.titles)}</h3>
                        <div class="row-features-inline">
                            ${category.features.slice(0, 3).map(feature => {
                                let f = feature;
                                switch(type) {
                                    case 'emlak':
                                        f = f.replace('{size}', Math.floor(Math.random() * 150) + 50)
                                             .replace('{rooms}', ['1+1', '2+1', '3+1', '4+1'][Math.floor(Math.random() * 4)])
                                             .replace('{floor}', Math.floor(Math.random() * 20) + 1);
                                        break;
                                    case 'vasita':
                                        f = f.replace('{km}', (Math.floor(Math.random() * 150) + 10) + ',' + (Math.floor(Math.random() * 999)).toString().padStart(3, '0'))
                                             .replace('{fuel}', ['Benzin', 'Dizel', 'Hibrit'][Math.floor(Math.random() * 3)])
                                             .replace('{gear}', ['Otomatik', 'Manuel'][Math.floor(Math.random() * 2)]);
                                        break;
                                    case 'elektronik':
                                        f = f.replace('{processor}', ['i5', 'i7', 'i9', 'Ryzen 5', 'Ryzen 7'][Math.floor(Math.random() * 5)])
                                             .replace('{ram}', ['8GB', '16GB', '32GB'][Math.floor(Math.random() * 3)])
                                             .replace('{storage}', ['256GB', '512GB', '1TB'][Math.floor(Math.random() * 3)]);
                                        break;
                                    case 'ev_esyasi':
                                        f = f.replace('{condition}', ['Sıfır', 'Az Kullanılmış', 'Yeni Gibi'][Math.floor(Math.random() * 3)])
                                             .replace('{color}', ['Beyaz', 'Gri', 'Kahve', 'Siyah'][Math.floor(Math.random() * 4)])
                                             .replace('{dimension}', ['Büyük Boy', 'Orta Boy', 'Kompakt'][Math.floor(Math.random() * 3)]);
                                        break;
                                }
                                return f;
                            }).join(' • ')}
                        </div>
                    </div>
                    
                    <div class="row-location-section">
                        <span class="row-location-text"><i class="fas fa-map-marker-alt"></i> ${randomize(category.locations)}</span>
                        <span class="row-date-text">${Math.floor(Math.random() * 24) + 1} saat önce</span>
                    </div>
                    <div class="row-description">
                        <p class="description-text">${randomize(category.descriptions)}</p>
                    </div>
                    <div class="row-user-info">
                        <div class="row-user-details">
                            <span class="row-user-name">${currentUser.name}</span>
                            ${currentUser.verified ? '<i class="fas fa-check-circle verified-badge" title="Doğrulanmış Kullanıcı"></i>' : ''}
                            <span class="row-user-stats">
                                ${currentUser.listings} aktif ilan • <i class="fas fa-star"></i> ${currentUser.rating} (${currentUser.reviews}) • ${currentUser.memberSince}'den beri
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="row-price-section">
                    <div class="row-price-main">${randomize(category.prices)}</div>
                    <div class="row-actions-thin">
                        <button class="favorite-btn-thin"><i class="fas fa-heart"></i></button>
                        <button class="contact-btn-thin"><i class="fas fa-comment"></i></button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Grid görünümü (varsayılan)
    return `
        <article class="listing-card">
            <div class="card-header">
                ${hasBadge ? `<span class="listing-badge ${randomize(badges).toLowerCase()}">${randomize(badges)}</span>` : ''}
                <button class="favorite-button"><i class="fas fa-heart"></i></button>
            </div>
            <div class="card-gallery">
                <img src="${photoUrl}" alt="${photoName}" class="listing-image">
                <div class="image-overlay">
                    <div class="image-count"><i class="fas fa-images"></i> ${Math.floor(Math.random() * 8) + 3}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="price">${randomize(category.prices)}</div>
                <h3 class="title">${randomize(category.titles)}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${randomize(category.locations)}</p>
                <p class="description">${randomize(category.descriptions)}</p>
                <div class="features">
                    ${category.features.map(feature => {
                        let f = feature;
                        switch(type) {
                            case 'emlak':
                                f = f.replace('{size}', Math.floor(Math.random() * 150) + 50)
                                     .replace('{rooms}', ['1+1', '2+1', '3+1', '4+1'][Math.floor(Math.random() * 4)])
                                     .replace('{floor}', Math.floor(Math.random() * 20) + 1);
                                break;
                            case 'vasita':
                                f = f.replace('{km}', (Math.floor(Math.random() * 150) + 10) + ',' + (Math.floor(Math.random() * 999)).toString().padStart(3, '0'))
                                     .replace('{fuel}', ['Benzin', 'Dizel', 'Hibrit'][Math.floor(Math.random() * 3)])
                                     .replace('{gear}', ['Otomatik', 'Manuel'][Math.floor(Math.random() * 2)]);
                                break;
                            case 'elektronik':
                                f = f.replace('{processor}', ['i5', 'i7', 'i9', 'Ryzen 5', 'Ryzen 7'][Math.floor(Math.random() * 5)])
                                     .replace('{ram}', ['8GB', '16GB', '32GB'][Math.floor(Math.random() * 3)])
                                     .replace('{storage}', ['256GB', '512GB', '1TB'][Math.floor(Math.random() * 3)]);
                                break;
                            case 'ev_esyasi':
                                f = f.replace('{condition}', ['Sıfır', 'Az Kullanılmış', 'Yeni Gibi'][Math.floor(Math.random() * 3)])
                                     .replace('{color}', ['Beyaz', 'Gri', 'Kahve', 'Siyah'][Math.floor(Math.random() * 4)])
                                     .replace('{dimension}', ['Büyük Boy', 'Orta Boy', 'Kompakt'][Math.floor(Math.random() * 3)]);
                                break;
                        }
                        return `<span>${f}</span>`;
                    }).join('')}
                </div>
                <div class="user-info">
                    <div class="user-details">
                        <div class="user-name">
                            <span class="name">${currentUser.name}</span>
                            ${currentUser.verified ? '<i class="fas fa-check-circle verified-badge" title="Doğrulanmış Kullanıcı"></i>' : ''}
                        </div>
                        <div class="user-stats">
                            <span class="listings-count">${currentUser.listings} aktif ilan</span>
                            <span class="user-rating">
                                <i class="fas fa-star"></i> ${currentUser.rating} (${currentUser.reviews} değerlendirme)
                            </span>
                            <span class="member-since">${currentUser.memberSince}'den beri üye</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="date">${Math.floor(Math.random() * 24) + 1} saat önce</span>
                    <button class="contact-button"><i class="fas fa-comment"></i> Mesaj At</button>
                </div>
            </div>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Filtre sistemini başlat
    initializeFilters();
    // İlan detay sistemini başlat
    initializeAdDetail();

    // İlanları ekle
    const grid = document.querySelector('.listings-grid');
    if (grid) {
        // Başlangıçta grid görünümü
        grid.classList.add('grid-view-verde');
        
        const page = window.location.pathname.includes('sayfa2.html') ? 2 : 1;
        
        // Her sayfada 20 ilan
        const types = ['emlak', 'vasita', 'elektronik', 'ev_esyasi'];
        let html = '';
        
        for(let i = 0; i < 4; i++) {
            const type = types[i % types.length]; // Sırayla farklı kategorilerden
            html += createListingCard(type, i, page);
        }
        
        grid.innerHTML = html;

        // Favori butonlarını aktifleştir
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                button.classList.toggle('active');
            });
        });

        // Liste/Grid görünümü
        const viewButtons = document.querySelectorAll('.view-button');
        let currentViewMode = 'grid';
        
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                viewButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');

                if (button.querySelector('.fa-list')) {
                    currentViewMode = 'list';
                    grid.classList.add('list-view-sahibinden');
                    grid.classList.remove('grid-view-verde');
                } else {
                    currentViewMode = 'grid';
                    grid.classList.add('grid-view-verde');
                    grid.classList.remove('list-view-sahibinden');
                }
                
                // İlanları yeniden oluştur
                let html = '';
                for(let i = 0; i < 4; i++) {
                    const type = types[i % types.length];
                    html += createListingCard(type, i, page, currentViewMode);
                }
                grid.innerHTML = html;
                
                // Butonları yeniden aktifleştir
                document.querySelectorAll('.favorite-button, .favorite-btn-thin').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        button.classList.toggle('active');
                    });
                });
            });
        });
    }

    // ESC tuşu ile modal'ı kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                const form = modal.querySelector('form');
                if (form) form.reset();
                const imagePreview = modal.querySelector('#imagePreview');
                if (imagePreview) imagePreview.innerHTML = '';
            });
            
            // Notification dropdown'ı da kapat
            const notificationDropdown = document.querySelector('.notification-dropdown');
            if (notificationDropdown) {
                notificationDropdown.classList.remove('active');
            }
        }
    });

    // Header Actions Functionality
    initializeHeaderActions();
});

        // Header Actions İşlevselliği
        function initializeHeaderActions() {
            const notificationBtn = document.getElementById('notificationBtn');
            const notificationDropdown = document.getElementById('notificationDropdown');
            const markAllReadBtn = document.querySelector('.mark-all-read');

            // Notification dropdown toggle
            if (notificationBtn && notificationDropdown) {
                notificationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    notificationDropdown.classList.toggle('active');
                    
                    // Diğer dropdownları kapat
                    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                        if (dropdown !== notificationDropdown) {
                            dropdown.classList.remove('active');
                        }
                    });
                });

                // Notification dışına tıklandığında kapat
                document.addEventListener('click', (e) => {
                    if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
                        notificationDropdown.classList.remove('active');
                    }
                });

                // Tümünü okundu işaretle
                if (markAllReadBtn) {
                    markAllReadBtn.addEventListener('click', () => {
                        const unreadItems = document.querySelectorAll('.notification-item.unread');
                        unreadItems.forEach(item => {
                            item.classList.remove('unread');
                        });
                        
                        // Badge'ı güncelle
                        const badge = notificationBtn.querySelector('.notification-badge');
                        if (badge) {
                            badge.style.display = 'none';
                        }
                        
                        // Dropdown'ı kapat
                        notificationDropdown.classList.remove('active');
                    });
                }

                // Notification itemlere tıklama
                const notificationItems = document.querySelectorAll('.notification-item');
                notificationItems.forEach(item => {
                    item.addEventListener('click', () => {
                        item.classList.remove('unread');
                        
                        // Kalan okunmamış sayısını güncelle
                        const remainingUnread = document.querySelectorAll('.notification-item.unread').length;
                        const badge = notificationBtn.querySelector('.notification-badge');
                        if (badge) {
                            if (remainingUnread > 0) {
                                badge.textContent = remainingUnread;
                            } else {
                                badge.style.display = 'none';
                            }
                        }
                    });
                });
            }

            // Header iconları hover efektleri
            const headerIcons = document.querySelectorAll('.header-icon');
            headerIcons.forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    icon.style.transform = 'translateY(-2px)';
                });
                
                icon.addEventListener('mouseleave', () => {
                    if (!icon.classList.contains('active')) {
                        icon.style.transform = '';
                    }
                });
            });
        }

        function initializeAdDetail() {
            // Resim galerisi kontrolü
            const thumbs = document.querySelectorAll('.thumb');
            const mainImage = document.querySelector('.main-image img');

            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    // Aktif thumbnail'i güncelle
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');

                    // Ana görseli güncelle
                    const newSrc = thumb.querySelector('img').src;
                    mainImage.src = newSrc;
                });
            });

            // Telefon numarası gösterme
            const showPhoneBtn = document.querySelector('.show-phone');
            if (showPhoneBtn) {
                showPhoneBtn.addEventListener('click', () => {
                    // Gerçek telefon numarası buraya gelecek
                    const phoneNumber = '+90 532 123 45 67';
                    showPhoneBtn.innerHTML = `<i class="fas fa-phone"></i> ${phoneNumber}`;
                });
            }

            // Mesaj gönderme
            const contactSellerBtn = document.querySelector('.contact-seller');
            if (contactSellerBtn) {
                contactSellerBtn.addEventListener('click', () => {
                    // Mesajlaşma modalını aç veya mesajlaşma sayfasına yönlendir
                    alert('Mesajlaşma özelliği çok yakında!');
                });
            }
        }

    function initializeFilters() {
        const filterToggle = document.querySelector('.filter-toggle');
        const advancedFilters = document.querySelector('.advanced-filters');
        const locationSelect = document.querySelector('.location-select');
        const districtSelect = document.querySelector('.district-select');
        const clearFiltersBtn = document.querySelector('.clear-filters');
        const applyFiltersBtn = document.querySelector('.apply-filters');

        // Filtre panelini aç/kapa
        filterToggle.addEventListener('click', () => {
            advancedFilters.classList.toggle('active');
        });

        // Şehir seçildiğinde ilçeleri güncelle
        locationSelect.addEventListener('change', (e) => {
            const city = e.target.value;
            updateDistricts(city);
        });

        // Filtreleri temizle
        clearFiltersBtn.addEventListener('click', () => {
            locationSelect.value = '';
            districtSelect.value = '';
            document.querySelectorAll('.price-input').forEach(input => input.value = '');
            document.querySelectorAll('.property-filters input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        });

        // Filtreleri uygula
        applyFiltersBtn.addEventListener('click', () => {
            const filters = {
                city: locationSelect.value,
                district: districtSelect.value,
                priceMin: document.querySelector('.price-input:first-child').value,
                priceMax: document.querySelector('.price-input:last-of-type').value,
                currency: document.querySelector('.currency-select').value,
                properties: Array.from(document.querySelectorAll('.property-filters input[type="checkbox"]:checked'))
                    .map(checkbox => checkbox.value)
            };
            applyFilters(filters);
        });

        // Dışarı tıklandığında filtre panelini kapat
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                advancedFilters.classList.remove('active');
            }
        });
    }

    function updateDistricts(city) {
        const districtSelect = document.querySelector('.district-select');
        districtSelect.innerHTML = '<option value="">Tüm İlçeler</option>';
        
        if (!city) return;

        // Şehirlerin ilçelerini ekle (örnek veri)
        const districts = {
            istanbul: ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Beyoğlu'],
            ankara: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut'],
            izmir: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli']
        };

        districts[city]?.forEach(district => {
            const option = document.createElement('option');
            option.value = district.toLowerCase();
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }

    function applyFilters(filters) {
        console.log('Uygulanan filtreler:', filters);
        // TODO: Filtreleri API'ye gönder ve sonuçları güncelle
        advancedFilters.classList.remove('active');
    }

    function initializeCategoryToggle() {
        const toggle = document.querySelector('.categories-toggle');
        const content = document.getElementById('categoriesContent');
        if (!toggle || !content) return;

        // Set initial icon/text based on collapsed state
        function updateToggleUI(isCollapsed) {
            toggle.setAttribute('aria-expanded', (!isCollapsed).toString());
            toggle.classList.toggle('active', !isCollapsed);
            
            const icon = toggle.querySelector('i');
            const label = toggle.querySelector('span');
            
            // Update icon and text
            if (isCollapsed) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                label.textContent = 'Göster';
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                label.textContent = 'Gizle';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Initialize UI based on current state
        updateToggleUI(content.classList.contains('collapsed'));

        // Handle click with animation
        toggle.addEventListener('click', () => {
            const willCollapse = !content.classList.contains('collapsed');
            content.classList.toggle('collapsed');
            updateToggleUI(willCollapse);
        });

        // keyboard support (Enter / Space)
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });

        // Make category-card keyboard actionable: Enter to open/view
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }

    // Favori butonları
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('active');
        });
    });

    // Görünüm değiştirme butonları
    const viewButtons = document.querySelectorAll('.view-button');
    const listingsGrid = document.querySelector('.listings-grid');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Liste görünümü için grid'i tek kolon yap
            if (button.querySelector('.fa-list')) {
                listingsGrid.style.gridTemplateColumns = '1fr';
            } else {
                listingsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
            }
        });
    });

    // Logo tıklaması
    const siteLogo = document.querySelector('.site-logo');
    if (siteLogo) {
        siteLogo.addEventListener('click', () => {
            window.location.href = '/';
        });
    }

    // İlan ver butonu
    const postAdButton = document.querySelector('.post-ad-fab');
    if (postAdButton) {
        postAdButton.addEventListener('click', () => {
            // TODO: İlan verme modalını aç
            console.log('İlan ver butonu tıklandı');
        });
    }

    // Kullanıcı menüsü
    const userButton = document.querySelector('.user-button');
    if (userButton) {
        userButton.addEventListener('click', () => {
            // TODO: Kullanıcı menüsünü aç
            console.log('Kullanıcı menüsü tıklandı');
        });
    }

    // Mesaj butonu
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Mesaj modalını aç
            console.log('Mesaj butonu tıklandı');
        });
    });

    // Global ESC handler: close any active modal/overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            // Close all active modals
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                const form = modal.querySelector('form');
                if (form) form.reset();
                const imagePreview = modal.querySelector('#imagePreview');
                if (imagePreview) imagePreview.innerHTML = '';
            });

            // Remove any stray overlay/backdrop elements if present
            document.querySelectorAll('.overlay, .modal-backdrop').forEach(el => el.remove());
        }
    });
;

// Profile Page JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    // Profile navigation tabs
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get target tab and show it
            const targetTab = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Profile avatar change functionality
    const changeAvatarBtn = document.querySelector('.change-avatar-btn');
    const avatarInput = document.getElementById('avatarInput');
    const profileImage = document.getElementById('profileImage');
    
    if (changeAvatarBtn && avatarInput && profileImage) {
        changeAvatarBtn.addEventListener('click', function() {
            avatarInput.click();
        });
        
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Edit profile functionality
    const editBtn = document.querySelector('.edit-btn');
    const infoInputs = document.querySelectorAll('.info-group input, .info-group select, .bio-section textarea');
    
    if (editBtn && infoInputs.length > 0) {
        let isEditing = false;
        
        editBtn.addEventListener('click', function() {
            isEditing = !isEditing;
            
            if (isEditing) {
                // Enable editing
                infoInputs.forEach(input => {
                    input.removeAttribute('readonly');
                    input.removeAttribute('disabled');
                    input.style.background = 'var(--surface)';
                });
                
                this.innerHTML = '<i class="fas fa-save"></i> Kaydet';
                this.style.background = 'var(--success)';
            } else {
                // Save and disable editing
                infoInputs.forEach(input => {
                    if (input.tagName.toLowerCase() === 'select') {
                        input.setAttribute('disabled', 'disabled');
                    } else {
                        input.setAttribute('readonly', 'readonly');
                    }
                    input.style.background = 'var(--gray-50)';
                });
                
                this.innerHTML = '<i class="fas fa-edit"></i> Düzenle';
                this.style.background = 'var(--primary)';
                
                // Here you would typically save the data to a server
                showNotification('Profil bilgileri güncellendi!', 'success');
            }
        });
    }
    
    // Ad filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const adItems = document.querySelectorAll('.ad-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter logic would go here
            const filterType = this.textContent.toLowerCase();
            console.log('Filtering by:', filterType);
        });
    });
    
    // Ad action buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.action-btn.edit')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            showNotification(`"${adTitle}" düzenleniyor...`, 'info');
        } else if (e.target.closest('.action-btn.delete')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            
            if (confirm(`"${adTitle}" ilanını silmek istediğinize emin misiniz?`)) {
                adItem.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    adItem.remove();
                    showNotification('İlan silindi', 'success');
                }, 300);
            }
        } else if (e.target.closest('.action-btn.stats')) {
            const adItem = e.target.closest('.ad-item');
            const adTitle = adItem.querySelector('h4').textContent;
            showNotification(`"${adTitle}" istatistikleri gösteriliyor...`, 'info');
        }
    });
});

// Notification function for profile page
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('.notification-styles')) {
        const style = document.createElement('style');
        style.className = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                color: white;
                font-weight: 600;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                min-width: 300px;
                transform: translateX(100%);
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification-success {
                background: var(--success);
            }
            
            .notification-error {
                background: var(--danger);
            }
            
            .notification-info {
                background: var(--primary);
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: auto;
                opacity: 0.8;
                transition: opacity 0.2s ease;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// My Ads Page JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    // Tab filtering functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const adCards = document.querySelectorAll('.ad-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get filter type
            const filter = this.getAttribute('data-filter');
            
            // Filter ads
            adCards.forEach(card => {
                const status = card.getAttribute('data-status');
                
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else if (status === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.ads-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            adCards.forEach(card => {
                const title = card.querySelector('.ad-title').textContent.toLowerCase();
                const location = card.querySelector('.ad-location').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || location.includes(searchTerm)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
    
    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            const adsContainer = document.querySelector('.ads-container');
            const adsArray = Array.from(adCards);
            
            adsArray.sort((a, b) => {
                switch (sortType) {
                    case 'date-desc':
                        // Newest first (default)
                        return new Date(b.querySelector('.ad-date').textContent.split(' ').slice(1).join(' ')) - 
                               new Date(a.querySelector('.ad-date').textContent.split(' ').slice(1).join(' '));
                    
                    case 'date-asc':
                        // Oldest first
                        return new Date(a.querySelector('.ad-date').textContent.split(' ').slice(1).join(' ')) - 
                               new Date(b.querySelector('.ad-date').textContent.split(' ').slice(1).join(' '));
                    
                    case 'views-desc':
                        // Most views first
                        const viewsA = parseInt(a.querySelector('.ad-views').textContent.replace(/\D/g, ''));
                        const viewsB = parseInt(b.querySelector('.ad-views').textContent.replace(/\D/g, ''));
                        return viewsB - viewsA;
                    
                    case 'price-asc':
                        // Lowest price first
                        const priceA = parseFloat(a.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        const priceB = parseFloat(b.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        return priceA - priceB;
                    
                    case 'price-desc':
                        // Highest price first
                        const priceA2 = parseFloat(a.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        const priceB2 = parseFloat(b.querySelector('.ad-price').textContent.replace(/[^\d,]/g, '').replace(',', '.'));
                        return priceB2 - priceA2;
                    
                    default:
                        return 0;
                }
            });
            
            // Re-append sorted ads
            adsArray.forEach(ad => {
                adsContainer.appendChild(ad);
            });
            
            showNotification(`İlanlar ${getSortDisplayName(sortType)} sıralandı`, 'info');
        });
    }
    
    // Action button handlers
    document.addEventListener('click', function(e) {
        const adCard = e.target.closest('.ad-card');
        const adTitle = adCard ? adCard.querySelector('.ad-title').textContent : '';
        
        if (e.target.closest('.action-btn.primary')) {
            if (adCard.getAttribute('data-status') === 'expired') {
                // Republish ad
                if (confirm(`"${adTitle}" ilanını yeniden yayınlamak istediğinize emin misiniz?`)) {
                    adCard.setAttribute('data-status', 'active');
                    const badge = adCard.querySelector('.ad-badge');
                    badge.textContent = 'Aktif';
                    badge.className = 'ad-badge active';
                    
                    // Update meta info
                    const expiredSpan = adCard.querySelector('.ad-expired');
                    if (expiredSpan) {
                        expiredSpan.innerHTML = '<i class="fas fa-clock"></i> 30 gün kaldı';
                        expiredSpan.className = 'ad-expires';
                    }
                    
                    showNotification(`"${adTitle}" başarıyla yeniden yayınlandı!`, 'success');
                }
            } else {
                // Edit ad
                showNotification(`"${adTitle}" düzenleniyor...`, 'info');
            }
        } else if (e.target.closest('.action-btn.success')) {
            if (adCard.getAttribute('data-status') === 'inactive') {
                // Activate ad
                if (confirm(`"${adTitle}" ilanını aktifleştirmek istediğinize emin misiniz?`)) {
                    adCard.setAttribute('data-status', 'active');
                    const badge = adCard.querySelector('.ad-badge');
                    badge.textContent = 'Aktif';
                    badge.className = 'ad-badge active';
                    
                    // Update meta info
                    const statusReason = adCard.querySelector('.ad-status-reason');
                    if (statusReason) {
                        statusReason.innerHTML = '<i class="fas fa-clock"></i> 25 gün kaldı';
                        statusReason.className = 'ad-expires';
                    }
                    
                    showNotification(`"${adTitle}" başarıyla aktifleştirildi!`, 'success');
                }
            } else {
                // Show statistics
                showAdStatistics(adTitle);
            }
        } else if (e.target.closest('.action-btn.warning')) {
            // Pause ad
            if (confirm(`"${adTitle}" ilanını duraklatmak istediğinize emin misiniz?`)) {
                adCard.setAttribute('data-status', 'inactive');
                const badge = adCard.querySelector('.ad-badge');
                badge.textContent = 'Pasif';
                badge.className = 'ad-badge inactive';
                
                // Update meta info
                const expires = adCard.querySelector('.ad-expires');
                if (expires) {
                    expires.innerHTML = '<i class="fas fa-info-circle"></i> Manuel olarak durduruldu';
                    expires.className = 'ad-status-reason';
                }
                
                showNotification(`"${adTitle}" durakladtıldı`, 'warning');
            }
        } else if (e.target.closest('.action-btn.danger')) {
            // Delete ad
            if (confirm(`"${adTitle}" ilanını kalıcı olarak silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz!`)) {
                adCard.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    adCard.remove();
                    updateAdCounts();
                    showNotification(`"${adTitle}" silindi`, 'success');
                }, 500);
            }
        } else if (e.target.closest('.action-btn.info')) {
            // Show statistics
            showAdStatistics(adTitle);
        } else if (e.target.closest('.action-btn.secondary')) {
            // Edit expired ad
            showNotification(`"${adTitle}" düzenleniyor...`, 'info');
        }
    });
    
    // Menu dropdown handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.menu-item')) {
            e.preventDefault();
            const menuItem = e.target.closest('.menu-item');
            const adCard = e.target.closest('.ad-card');
            const adTitle = adCard.querySelector('.ad-title').textContent;
            
            if (menuItem.textContent.includes('Öne Çıkar')) {
                showNotification(`"${adTitle}" öne çıkarıldı!`, 'success');
            } else if (menuItem.textContent.includes('Kopyala')) {
                showNotification(`"${adTitle}" kopyalandı`, 'info');
            } else if (menuItem.textContent.includes('Paylaş')) {
                showShareDialog(adTitle);
            }
        }
    });
    
    // Pagination handlers
    const pageButtons = document.querySelectorAll('.page-btn:not([disabled])');
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active') && !this.hasAttribute('disabled')) {
                // Remove active class from all page buttons
                pageButtons.forEach(pb => pb.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Simulate page loading
                const adsContainer = document.querySelector('.ads-container');
                adsContainer.style.opacity = '0.5';
                
                setTimeout(() => {
                    adsContainer.style.opacity = '1';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 300);
            }
        });
    });
});

// Helper functions for My Ads page
function getSortDisplayName(sortType) {
    const sortNames = {
        'date-desc': 'tarihe göre (yeniden eskiye)',
        'date-asc': 'tarihe göre (eskiden yeniye)',
        'views-desc': 'görüntülenme sayısına göre',
        'price-asc': 'fiyata göre (artan)',
        'price-desc': 'fiyata göre (azalan)'
    };
    return sortNames[sortType] || 'varsayılan';
}

function showAdStatistics(adTitle) {
    const statsHTML = `
        <div class="stats-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: var(--surface);
                padding: 2rem;
                border-radius: 16px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: var(--text); margin-bottom: 1.5rem; text-align: center;">${adTitle} - İstatistikler</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">324</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Görüntülenme</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--success);">23</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Favori</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--warning);">8</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Mesaj</div>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: var(--gray-50); border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent);">12</div>
                        <div style="color: var(--muted); font-size: 0.9rem;">Teklif</div>
                    </div>
                </div>
                <button onclick="this.closest('.stats-modal').remove()" style="
                    width: 100%;
                    padding: 1rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Kapat</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', statsHTML);
}

function showShareDialog(adTitle) {
    const shareHTML = `
        <div class="share-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: var(--surface);
                padding: 2rem;
                border-radius: 16px;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: var(--text); margin-bottom: 1.5rem; text-align: center;">${adTitle} - Paylaş</h3>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
                    <button style="padding: 1rem; background: #1877f2; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-facebook"></i>
                    </button>
                    <button style="padding: 1rem; background: #1da1f2; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button style="padding: 1rem; background: #25d366; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button onclick="navigator.clipboard.writeText(window.location.href); showNotification('Link kopyalandı!', 'success'); this.closest('.share-modal').remove();" style="padding: 1rem; background: var(--gray-600); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <button onclick="this.closest('.share-modal').remove()" style="
                    width: 100%;
                    padding: 1rem;
                    background: var(--muted);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Kapat</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', shareHTML);
}

function updateAdCounts() {
    const activeAds = document.querySelectorAll('.ad-card[data-status="active"]').length;
    const inactiveAds = document.querySelectorAll('.ad-card[data-status="inactive"]').length;
    const expiredAds = document.querySelectorAll('.ad-card[data-status="expired"]').length;
    const totalAds = activeAds + inactiveAds + expiredAds;
    
    // Update tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        switch (filter) {
            case 'all':
                btn.textContent = `Tümü (${totalAds})`;
                break;
            case 'active':
                btn.textContent = `Aktif (${activeAds})`;
                break;
            case 'inactive':
                btn.textContent = `Pasif (${inactiveAds})`;
                break;
            case 'expired':
                btn.textContent = `Süresi Dolmuş (${expiredAds})`;
                break;
        }
    });
    
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards[1]) statCards[1].querySelector('h3').textContent = activeAds;
    if (statCards[2]) statCards[2].querySelector('h3').textContent = inactiveAds;
    if (statCards[3]) statCards[3].querySelector('h3').textContent = expiredAds;
}

// Logout Functionality
function initializeLogout() {
    const logoutBtn = document.querySelector('.logout');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}

function handleLogout() {
    // Onay modalı göster
    const confirmed = confirm('Hesabınızdan çıkış yapmak istediğinizden emin misiniz?');
    
    if (confirmed) {
        // Loading state göster
        showLogoutLoading();
        
        // Simulated logout process
        setTimeout(() => {
            performLogout();
        }, 1500);
    }
}

function showLogoutLoading() {
    // Logout butonunu loading state'e al
    const logoutBtn = document.querySelector('.logout');
    const originalContent = logoutBtn.innerHTML;
    
    logoutBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        <span>Çıkış yapılıyor...</span>
    `;
    logoutBtn.style.pointerEvents = 'none';
    logoutBtn.style.opacity = '0.7';
}

function performLogout() {
    // LocalStorage'ı temizle
    localStorage.clear();
    sessionStorage.clear();
    
    // Kullanıcı verilerini sıfırla
    clearUserData();
    
    // Success notification
    showNotification('Başarıyla çıkış yapıldı!', 'success');
    
    // Ana sayfaya yönlendir veya login sayfasına
    setTimeout(() => {
        // Eğer login sayfası varsa oraya yönlendir
        // window.location.href = 'login.html';
        
        // Yoksa sayfayı yenile (guest mode)
        window.location.reload();
    }, 1000);
}

function clearUserData() {
    // Kullanıcı profil bilgilerini temizle
    const userElements = document.querySelectorAll('[data-user]');
    userElements.forEach(el => {
        el.textContent = 'Misafir Kullanıcı';
    });
    
    // Avatar'ı default yap
    const avatars = document.querySelectorAll('.avatar, .user-avatar');
    avatars.forEach(avatar => {
        avatar.src = 'https://placehold.co/40x40/cccccc/666666?text=?';
        avatar.alt = 'Misafir';
    });
    
    // Show auth buttons, hide user menu
    const authButtons = document.querySelector('.auth-buttons');
    const userMenu = document.querySelector('.user-menu');
    
    if (userMenu) userMenu.style.display = 'none';
    if (authButtons) authButtons.style.display = 'flex';
}

function showNotification(message, type = 'info') {
    // Basit notification sistemi
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// CSS animations for notification
if (!document.querySelector('#logout-styles')) {
    const styles = document.createElement('style');
    styles.id = 'logout-styles';
    styles.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        }
    `;
    document.head.appendChild(styles);
}

// Sayfa yüklendiğinde logout fonksiyonunu başlat
document.addEventListener('DOMContentLoaded', function() {
    initializeLogout();
    checkUserLoginStatus();
});

// Check user login status and show appropriate buttons
function checkUserLoginStatus() {
    const userData = getUserData();
    const authButtons = document.querySelector('.auth-buttons');
    const userMenu = document.querySelector('.user-menu');
    
    if (userData && userData.isLoggedIn) {
        // User is logged in - show user menu
        if (authButtons) authButtons.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'block';
            updateUserInfo(userData);
        }
    } else {
        // User is not logged in - show auth buttons
        if (userMenu) userMenu.style.display = 'none';
        if (authButtons) authButtons.style.display = 'flex';
    }
}

function getUserData() {
    // Check sessionStorage first (for current session)
    let userData = sessionStorage.getItem('verde_user');
    if (userData) {
        return JSON.parse(userData);
    }
    
    // Check localStorage (for "remember me")
    userData = localStorage.getItem('verde_user');
    if (userData) {
        return JSON.parse(userData);
    }
    
    return null;
}

function updateUserInfo(userData) {
    // Update user name in dropdown
    const userNameElement = document.querySelector('.user-name');
    const userEmailElement = document.querySelector('.user-email');
    const userButtonSpan = document.querySelector('.user-button span');
    
    if (userNameElement) {
        userNameElement.textContent = userData.name || 'Kullanıcı';
    }
    
    if (userEmailElement) {
        userEmailElement.textContent = userData.email || '';
    }
    
    if (userButtonSpan) {
        userButtonSpan.textContent = userData.name || 'Hesabım';
    }
    
    // Show welcome message for new users
    if (userData.isNewUser) {
        setTimeout(() => {
            showNotification(`Hoş geldiniz ${userData.name}! Verde'ye başarıyla kaydoldunuz.`, 'success');
            
            // Remove new user flag
            userData.isNewUser = false;
            if (localStorage.getItem('verde_user')) {
                localStorage.setItem('verde_user', JSON.stringify(userData));
            } else {
                sessionStorage.setItem('verde_user', JSON.stringify(userData));
            }
        }, 1000);
    }
}

// Settings page functionality
function initializeSettings() {
    // Only run on settings page
    if (!window.location.pathname.includes('ayarlar.html')) {
        return;
    }
    
    // Check if user is logged in
    const userData = getUserData();
    if (!userData || !userData.isLoggedIn) {
        alert('Ayarlar sayfasına erişim için giriş yapmanız gerekiyor.');
        window.location.href = 'login.html';
        return;
    }
    
    initializeSettingsNavigation();
    loadUserDataIntoSettings(userData);
}

function initializeSettingsNavigation() {
    const navItems = document.querySelectorAll('.settings-nav .nav-item');
    const sections = document.querySelectorAll('.settings-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get target section and show it
            const href = this.getAttribute('href');
            const targetId = href.substring(1); // Remove #
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Add visual feedback
            const icon = this.querySelector('i');
            if (icon) {
                const originalClass = icon.className;
                icon.className = 'fas fa-spinner fa-spin';
                
                setTimeout(() => {
                    icon.className = originalClass;
                }, 300);
            }
        });
    });
}

function loadUserDataIntoSettings(userData) {
    // Load user data into form fields if they exist
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    if (nameInput && userData.name) nameInput.value = userData.name;
    if (emailInput && userData.email) emailInput.value = userData.email;
    if (phoneInput && userData.phone) phoneInput.value = userData.phone;
}

// Add settings initialization to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLogout();
    checkUserLoginStatus();
    initializeSettings();
    initializeModalSystem();
});

// Modal ve Kategori Sistemi
function initializeModalSystem() {
    const modal = document.getElementById('quickPostModal');
    const postAdButton = document.querySelector('.post-ad-button');
    const closeModal = document.querySelector('.close-modal');
    
    // İlan ver butonu
    if (postAdButton) {
        postAdButton.addEventListener('click', function() {
            modal.classList.add('active');
            showCategoryStep();
        });
    }
    
    // Modal kapatma
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }
    
    // Modal dışına tıklayınca kapatma
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Kategori ve form sistemi
    initializeCategorySystem();
}

function initializeCategorySystem() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const backButton = document.getElementById('backToCategory');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showFormStep(category);
        });
    });
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            showCategoryStep();
        });
    }
}

function showCategoryStep() {
    const categoryStep = document.getElementById('categoryStep');
    const formStep = document.getElementById('formStep');
    
    categoryStep.classList.add('active');
    formStep.classList.remove('active');
}

function showFormStep(category) {
    const categoryStep = document.getElementById('categoryStep');
    const formStep = document.getElementById('formStep');
    const formTitle = document.getElementById('formTitle');
    const dynamicForm = document.getElementById('dynamicForm');
    
    categoryStep.classList.remove('active');
    formStep.classList.add('active');
    
    // Form başlığını güncelle
    const titles = {
        'ev': 'Ev İlanı Ver',
        'araba': 'Araba İlanı Ver',
        'telefon': 'Telefon İlanı Ver',
        'elektronik': 'Elektronik İlanı Ver',
        'giyim': 'Giyim İlanı Ver',
        'is-ilani': 'İş İlanı Ver'
    };
    formTitle.textContent = titles[category];
    
    // Kategori formunu yükle
    loadCategoryForm(category, dynamicForm);
}

function loadCategoryForm(category, container) {
    let formHTML = '';
    
    if (category === 'araba') {
        formHTML = generateCarFormHTML();
    } else if (category === 'ev') {
        formHTML = generateHouseFormHTML();
    } else if (category === 'telefon') {
        formHTML = generatePhoneFormHTML();
    } else if (category === 'elektronik') {
        formHTML = generateElektronikFormHTML();
    } else if (category === 'giyim') {
        formHTML = generateGiyimFormHTML();
    } else if (category === 'is-ilani') {
        formHTML = generateIsIlaniFormHTML();
    }
    
    container.innerHTML = formHTML;
    
    // Form submit event'ini ekle
    const form = container.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleCategoryFormSubmit);
    }
    
    // Fotoğraf yükleme event'ini ekle
    const photoInput = container.querySelector('input[type="file"]');
    if (photoInput) {
        const photoUpload = photoInput.parentElement;
        photoUpload.addEventListener('click', () => photoInput.click());
    }
}

function generateCarFormHTML() {
    return `
        <form class="car-form" id="carForm">
            <div class="form-section">
                <h4><i class="fas fa-car"></i> Araç Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="carBrand">Marka *</label>
                        <select id="carBrand" name="marka">
                            <option value="">Marka Seçin</option>
                            <option value="toyota">Toyota</option>
                            <option value="volkswagen">Volkswagen</option>
                            <option value="ford">Ford</option>
                            <option value="renault">Renault</option>
                            <option value="hyundai">Hyundai</option>
                            <option value="bmw">BMW</option>
                            <option value="mercedes">Mercedes-Benz</option>
                            <option value="audi">Audi</option>
                            <option value="opel">Opel</option>
                            <option value="fiat">Fiat</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="carModel">Model *</label>
                        <input type="text" id="carModel" name="model"  placeholder="Örn: Corolla, Golf, Focus">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="carYear">Model Yılı *</label>
                        <input type="number" id="carYear" name="model_yili"  min="1900" max="2025" placeholder="2020">
                    </div>
                    <div class="form-group">
                        <label for="carKm">Kilometre *</label>
                        <input type="number" id="carKm" name="kilometre"  min="0" placeholder="85000">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="carFuel">Yakıt Türü *</label>
                        <select id="carFuel" name="yakit_turu" >
                            <option value="">Seçin</option>
                            <option value="benzin">Benzin</option>
                            <option value="dizel">Dizel</option>
                            <option value="lpg">LPG</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="elektrik">Elektrik</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="carTransmission">Vites Türü *</label>
                        <select id="carTransmission" name="vites_turu" >
                            <option value="">Seçin</option>
                            <option value="manuel">Manuel</option>
                            <option value="otomatik">Otomatik</option>
                            <option value="yari-otomatik">Yarı Otomatik</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="carBody">Kasa Tipi *</label>
                        <select id="carBody" name="kasa_tipi" >
                            <option value="">Seçin</option>
                            <option value="sedan">Sedan</option>
                            <option value="hatchback">Hatchback</option>
                            <option value="suv">SUV</option>
                            <option value="coupe">Coupe</option>
                            <option value="station-wagon">Station Wagon</option>
                            <option value="minivan">Minivan</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="carColor">Renk *</label>
                        <input type="text" id="carColor" name="renk"  placeholder="Beyaz, Siyah, Gri...">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="carEngine">Motor Hacmi (cc)</label>
                        <input type="number" id="carEngine" name="motor_hacmi" min="500" max="8000" placeholder="1600">
                    </div>
                    <div class="form-group">
                        <label for="carPower">Beygir Gücü (HP) *</label>
                        <input type="number" id="carPower" name="beygir_gucu"  min="0" placeholder="120">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-cogs"></i> Teknik Detaylar</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="carDrive">Çekiş Türü *</label>
                        <select id="carDrive" name="cekis" >
                            <option value="">Seçin</option>
                            <option value="onden-cekis">Önden Çekiş</option>
                            <option value="arkadan-itis">Arkadan İtiş</option>
                            <option value="4x4">4x4</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="carInspection">Muayene Tarihi</label>
                        <input type="date" id="carInspection" name="muayene_tarihi">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="hasDamage" name="hasar_kaydi">
                            <label for="hasDamage">Hasar kaydı var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="damageDetails">Hasar Detayları</label>
                        <textarea id="damageDetails" name="hasar_detaylari" placeholder="Varsa hasar detaylarını açıklayın..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-tag"></i> Fiyat ve İletişim</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="carPrice">Satış Fiyatı (TL) *</label>
                        <input type="number" id="carPrice" name="fiyat"  min="1000" placeholder="450000">
                    </div>
                    <div class="form-group">
                        <label for="carNegotiable">Pazarlık</label>
                        <select id="carNegotiable" name="pazarlik">
                            <option value="evet">Evet</option>
                            <option value="hayir">Hayır</option>
                            <option value="kisimli">Kısmen</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="ownerName">Ad Soyad *</label>
                        <input type="text" id="ownerName" name="satici_adi"  placeholder="İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="ownerPhone">Telefon *</label>
                        <input type="tel" id="ownerPhone" name="telefon"  placeholder="0532 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="carCity">Şehir *</label>
                        <input type="text" id="carCity" name="sehir"  placeholder="İstanbul">
                    </div>
                    <div class="form-group">
                        <label for="carDistrict">İlçe</label>
                        <input type="text" id="carDistrict" name="ilce" placeholder="Kadıköy">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İlan Detayları</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adTitle">İlan Başlığı *</label>
                        <input type="text" id="adTitle" name="baslik"  maxlength="120" placeholder="Toyota Corolla 2020 - 85.000 km - 450.000 TL">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adDescription">İlan Açıklaması *</label>
                        <textarea id="adDescription" name="aciklama"  minlength="50" placeholder="Aracınızın detaylı özelliklerini ve durumunu açıklayınız..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-camera"></i> Fotoğraflar</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="photo-upload">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Araç fotoğraflarını yükleyin</p>
                            <p><small>En az 8, en fazla 40 fotoğraf • JPG, PNG • Max 10MB</small></p>
                            <input type="file" id="carPhotos" name="fotograflar" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function generateHouseFormHTML() {
    return `
        <form class="car-form" id="houseForm">
            <div class="form-section">
                <h4><i class="fas fa-home"></i> Emlak Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="propertyType">İlan Türü *</label>
                        <select id="propertyType" name="ilan_turu" required>
                            <option value="">Seçin</option>
                            <option value="satilik">Satılık</option>
                            <option value="kiralik">Kiralık</option>
                            <option value="devren">Devren</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="propertyCategory">Emlak Tipi *</label>
                        <select id="propertyCategory" name="emlak_tipi" required>
                            <option value="">Seçin</option>
                            <option value="daire">Daire</option>
                            <option value="villa">Villa</option>
                            <option value="dubleks">Dubleks</option>
                            <option value="mustakil-ev">Müstakil Ev</option>
                            <option value="residence">Residence</option>
                            <option value="ofis">Ofis</option>
                            <option value="dukkkan">Dükkan</option>
                            <option value="arsa">Arsa</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="roomCount">Oda Sayısı *</label>
                        <select id="roomCount" name="oda_sayisi" required>
                            <option value="">Seçin</option>
                            <option value="1+0">1+0</option>
                            <option value="1+1">1+1</option>
                            <option value="2+1">2+1</option>
                            <option value="3+1">3+1</option>
                            <option value="4+1">4+1</option>
                            <option value="5+1">5+1</option>
                            <option value="6+1">6+1 ve üzeri</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="squareMeters">Metrekare (m²) *</label>
                        <input type="number" id="squareMeters" name="metrekare" required min="10" placeholder="120">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="buildingAge">Bina Yaşı</label>
                        <select id="buildingAge" name="bina_yasi">
                            <option value="">Seçin</option>
                            <option value="0">0 (Sıfır Bina)</option>
                            <option value="1-5">1-5 Yıl</option>
                            <option value="6-10">6-10 Yıl</option>
                            <option value="11-15">11-15 Yıl</option>
                            <option value="16-20">16-20 Yıl</option>
                            <option value="21-25">21-25 Yıl</option>
                            <option value="26+">26+ Yıl</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="floor">Bulunduğu Kat</label>
                        <select id="floor" name="bulundugu_kat">
                            <option value="">Seçin</option>
                            <option value="bodrum">Bodrum</option>
                            <option value="zemin">Zemin</option>
                            <option value="1">1. Kat</option>
                            <option value="2">2. Kat</option>
                            <option value="3">3. Kat</option>
                            <option value="4">4. Kat</option>
                            <option value="5">5. Kat</option>
                            <option value="6+">6+ Kat</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="totalFloors">Kat Sayısı</label>
                        <input type="number" id="totalFloors" name="toplam_kat" min="1" max="50" placeholder="5">
                    </div>
                    <div class="form-group">
                        <label for="heating">Isıtma</label>
                        <select id="heating" name="isitma">
                            <option value="">Seçin</option>
                            <option value="merkezi">Merkezi</option>
                            <option value="kombi">Kombi</option>
                            <option value="klima">Klima</option>
                            <option value="soba">Soba</option>
                            <option value="yok">Yok</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-check-square"></i> Özellikler</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="bathrooms">Banyo Sayısı</label>
                        <select id="bathrooms" name="banyo_sayisi">
                            <option value="">Seçin</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="balcony">Balkon</label>
                        <select id="balcony" name="balkon">
                            <option value="">Seçin</option>
                            <option value="var">Var</option>
                            <option value="yok">Yok</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="furnished" name="esyali">
                            <label for="furnished">Eşyalı</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="parking" name="otopark">
                            <label for="parking">Otopark</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="elevator" name="asansor">
                            <label for="elevator">Asansör</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-tag"></i> Fiyat ve İletişim</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="housePrice">Fiyat (TL) *</label>
                        <input type="number" id="housePrice" name="fiyat" required min="1000" placeholder="850000">
                    </div>
                    <div class="form-group">
                        <label for="deposit">Depozito (Kiralık ise)</label>
                        <input type="number" id="deposit" name="depozito" min="0" placeholder="5000">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="ownerNameHouse">Ad Soyad *</label>
                        <input type="text" id="ownerNameHouse" name="satici_adi" required placeholder="İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="ownerPhoneHouse">Telefon *</label>
                        <input type="tel" id="ownerPhoneHouse" name="telefon" required placeholder="0532 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="houseCityHouse">Şehir *</label>
                        <input type="text" id="houseCityHouse" name="sehir" required placeholder="İstanbul">
                    </div>
                    <div class="form-group">
                        <label for="houseDistrictHouse">İlçe *</label>
                        <input type="text" id="houseDistrictHouse" name="ilce" required placeholder="Beşiktaş">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="address">Adres Detayı</label>
                        <textarea id="address" name="adres" placeholder="Mahalle, sokak ve diğer adres detayları..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İlan Detayları</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adTitleHouse">İlan Başlığı *</label>
                        <input type="text" id="adTitleHouse" name="baslik" required maxlength="120" placeholder="Deniz Manzaralı 3+1 Daire - Beşiktaş">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adDescriptionHouse">İlan Açıklaması *</label>
                        <textarea id="adDescriptionHouse" name="aciklama" required minlength="50" placeholder="Emlakınızın özelliklerini, konumunu ve avantajlarını detayıyla açıklayınız..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-camera"></i> Fotoğraflar</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="photo-upload">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Emlak fotoğraflarını yükleyin</p>
                            <p><small>En az 5, en fazla 30 fotoğraf • JPG, PNG • Max 10MB</small></p>
                            <input type="file" id="housePhotos" name="fotograflar" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function generatePhoneFormHTML() {
    return `
        <form class="car-form" id="phoneForm">
            <div class="form-section">
                <h4><i class="fas fa-mobile-alt"></i> Telefon Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="phoneBrand">Marka *</label>
                        <select id="phoneBrand" name="marka" required>
                            <option value="">Marka Seçin</option>
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="huawei">Huawei</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="oppo">Oppo</option>
                            <option value="oneplus">OnePlus</option>
                            <option value="google">Google</option>
                            <option value="sony">Sony</option>
                            <option value="lg">LG</option>
                            <option value="nokia">Nokia</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="phoneModel">Model *</label>
                        <input type="text" id="phoneModel" name="model" required placeholder="Örn: iPhone 15, Galaxy S24, P60 Pro">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phoneStorage">Depolama *</label>
                        <select id="phoneStorage" name="depolama" required>
                            <option value="">Seçin</option>
                            <option value="32gb">32 GB</option>
                            <option value="64gb">64 GB</option>
                            <option value="128gb">128 GB</option>
                            <option value="256gb">256 GB</option>
                            <option value="512gb">512 GB</option>
                            <option value="1tb">1 TB</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="phoneColor">Renk *</label>
                        <input type="text" id="phoneColor" name="renk" required placeholder="Siyah, Beyaz, Mavi...">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phoneCondition">Kullanım Durumu *</label>
                        <select id="phoneCondition" name="kullanim_durumu" required>
                            <option value="">Seçin</option>
                            <option value="sifir">Sıfır (Kutusunda)</option>
                            <option value="sifir-acilmis">Sıfır (Kutusu Açılmış)</option>
                            <option value="az-kullanilmis">Az Kullanılmış</option>
                            <option value="normal">Normal Kullanılmış</option>
                            <option value="cok-kullanilmis">Çok Kullanılmış</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="warranty">Garanti Durumu</label>
                        <select id="warranty" name="garanti">
                            <option value="">Seçin</option>
                            <option value="garanti-var">Garanti Var</option>
                            <option value="garanti-yok">Garanti Yok</option>
                            <option value="garanti-bitti">Garanti Bitti</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phoneOperator">Operatör</label>
                        <select id="phoneOperator" name="operator">
                            <option value="">Seçin</option>
                            <option value="turkcell">Turkcell</option>
                            <option value="vodafone">Vodafone</option>
                            <option value="turk-telekom">Türk Telekom</option>
                            <option value="bimcell">BİMcell</option>
                            <option value="operatorsuz">Operatörsüz</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="screenSize">Ekran Boyutu</label>
                        <input type="text" id="screenSize" name="ekran_boyutu" placeholder='6.7"'>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-cogs"></i> Özellikler ve Durumu</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="originalBox" name="orjinal_kutu">
                            <label for="originalBox">Orijinal Kutusu Var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="originalCharger" name="orjinal_sarj">
                            <label for="originalCharger">Orijinal Şarj Aleti Var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="screenProtector" name="ekran_koruyucu">
                            <label for="screenProtector">Ekran Koruyucu Var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="phoneCase" name="kilif">
                            <label for="phoneCase">Kılıf Var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="hasDamage" name="hasar_var">
                            <label for="hasDamage">Hasar/Arıza Var</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="damageDescription">Hasar/Arıza Açıklaması</label>
                        <textarea id="damageDescription" name="hasar_aciklama" placeholder="Varsa hasar, çizik, arıza detaylarını açıklayın..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-tag"></i> Fiyat ve İletişim</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="phonePrice">Satış Fiyatı (TL) *</label>
                        <input type="number" id="phonePrice" name="fiyat" required min="100" placeholder="25000">
                    </div>
                    <div class="form-group">
                        <label for="phoneNegotiable">Pazarlık</label>
                        <select id="phoneNegotiable" name="pazarlik">
                            <option value="evet">Evet</option>
                            <option value="hayir">Hayır</option>
                            <option value="kisimli">Kısmen</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="phoneExchange" name="takas">
                            <label for="phoneExchange">Takas Kabul Ediyorum</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="ownerNamePhone">Ad Soyad *</label>
                        <input type="text" id="ownerNamePhone" name="satici_adi" required placeholder="İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="ownerPhonePhone">Telefon *</label>
                        <input type="tel" id="ownerPhonePhone" name="telefon" required placeholder="0532 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phoneCityPhone">Şehir *</label>
                        <input type="text" id="phoneCityPhone" name="sehir" required placeholder="İstanbul">
                    </div>
                    <div class="form-group">
                        <label for="phoneDistrictPhone">İlçe</label>
                        <input type="text" id="phoneDistrictPhone" name="ilce" placeholder="Kadıköy">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İlan Detayları</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adTitlePhone">İlan Başlığı *</label>
                        <input type="text" id="adTitlePhone" name="baslik" required maxlength="120" placeholder="iPhone 15 128GB Siyah - Sıfır Ayarında">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="adDescriptionPhone">İlan Açıklaması *</label>
                        <textarea id="adDescriptionPhone" name="aciklama" required minlength="50" placeholder="Telefonunuzun durumunu, özelliklerini ve kullanım geçmişini detayıyla açıklayınız..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-camera"></i> Fotoğraflar</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="photo-upload">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Telefon fotoğraflarını yükleyin</p>
                            <p><small>En az 3, en fazla 15 fotoğraf • JPG, PNG • Max 10MB</small></p>
                            <input type="file" id="phonePhotos" name="fotograflar" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function generateElektronikFormHTML() {
    return `
        <form class="car-form" id="elektronikForm">
            <div class="form-section">
                <h4><i class="fas fa-laptop"></i> Elektronik Ürün Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="elektronikKategori">Ürün Kategorisi *</label>
                        <select id="elektronikKategori" name="kategori" required>
                            <option value="">Seçin</option>
                            <option value="bilgisayar">Bilgisayar</option>
                            <option value="laptop">Laptop</option>
                            <option value="tablet">Tablet</option>
                            <option value="oyun-konsolu">Oyun Konsolu</option>
                            <option value="tv">Televizyon</option>
                            <option value="ses-sistemi">Ses Sistemi</option>
                            <option value="kamera">Kamera</option>
                            <option value="beyaz-esya">Beyaz Eşya</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="elektronikMarka">Marka *</label>
                        <input type="text" id="elektronikMarka" name="marka" required placeholder="Apple, Samsung, Sony...">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="elektronikModel">Model *</label>
                        <input type="text" id="elektronikModel" name="model" required placeholder="Model adı veya numarası">
                    </div>
                    <div class="form-group">
                        <label for="elektronikDurum">Kullanım Durumu *</label>
                        <select id="elektronikDurum" name="durum" required>
                            <option value="">Seçin</option>
                            <option value="sifir">Sıfır</option>
                            <option value="az-kullanilmis">Az Kullanılmış</option>
                            <option value="normal">Normal</option>
                            <option value="eskimiş">Eskimiş</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="elektronikGaranti" name="garanti_var">
                            <label for="elektronikGaranti">Garanti Var</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-tag"></i> Fiyat ve İletişim</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="elektronikFiyat">Fiyat (TL) *</label>
                        <input type="number" id="elektronikFiyat" name="fiyat" required min="50" placeholder="5000">
                    </div>
                    <div class="form-group">
                        <label for="elektronikPazarlik">Pazarlık</label>
                        <select id="elektronikPazarlik" name="pazarlik">
                            <option value="evet">Evet</option>
                            <option value="hayir">Hayır</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="elektronikSatici">Ad Soyad *</label>
                        <input type="text" id="elektronikSatici" name="satici_adi" required placeholder="İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="elektronikTelefon">Telefon *</label>
                        <input type="tel" id="elektronikTelefon" name="telefon" required placeholder="0532 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="elektronikSehir">Şehir *</label>
                        <input type="text" id="elektronikSehir" name="sehir" required placeholder="İstanbul">
                    </div>
                    <div class="form-group">
                        <label for="elektronikIlce">İlçe</label>
                        <input type="text" id="elektronikIlce" name="ilce" placeholder="Kadıköy">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İlan Detayları</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="elektronikBaslik">İlan Başlığı *</label>
                        <input type="text" id="elektronikBaslik" name="baslik" required maxlength="120" placeholder="MacBook Pro 13 - Az Kullanılmış">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="elektronikAciklama">Açıklama *</label>
                        <textarea id="elektronikAciklama" name="aciklama" required minlength="30" placeholder="Ürününüzün özelliklerini ve durumunu detaylıca açıklayın..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-camera"></i> Fotoğraflar</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="photo-upload">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Ürün fotoğraflarını yükleyin</p>
                            <p><small>En az 3, en fazla 20 fotoğraf</small></p>
                            <input type="file" id="elektronikFotolar" name="fotograflar" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function generateGiyimFormHTML() {
    return `
        <form class="car-form" id="giyimForm">
            <div class="form-section">
                <h4><i class="fas fa-tshirt"></i> Giyim Ürünü Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimTuru">Ürün Türü *</label>
                        <select id="giyimTuru" name="urun_turu" required>
                            <option value="">Seçin</option>
                            <option value="ust-giyim">Üst Giyim</option>
                            <option value="alt-giyim">Alt Giyim</option>
                            <option value="ayakkabi">Ayakkabı</option>
                            <option value="canta">Çanta</option>
                            <option value="aksesuar">Aksesuar</option>
                            <option value="ic-giyim">İç Giyim</option>
                            <option value="takim">Takım</option>
                            <option value="elbise">Elbise</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="giyimMarka">Marka</label>
                        <input type="text" id="giyimMarka" name="marka" placeholder="Nike, Adidas, Zara...">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimBeden">Beden *</label>
                        <select id="giyimBeden" name="beden" required>
                            <option value="">Seçin</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="giyimRenk">Renk *</label>
                        <input type="text" id="giyimRenk" name="renk" required placeholder="Siyah, Beyaz, Mavi...">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimCinsiyet">Cinsiyet</label>
                        <select id="giyimCinsiyet" name="cinsiyet">
                            <option value="">Seçin</option>
                            <option value="kadin">Kadın</option>
                            <option value="erkek">Erkek</option>
                            <option value="unisex">Unisex</option>
                            <option value="cocuk">Çocuk</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="giyimDurum">Kullanım Durumu *</label>
                        <select id="giyimDurum" name="durum" required>
                            <option value="">Seçin</option>
                            <option value="sifir">Sıfır (Etiketli)</option>
                            <option value="az-kullanilmis">Az Kullanılmış</option>
                            <option value="normal">Normal</option>
                            <option value="vintage">Vintage</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-tag"></i> Fiyat ve İletişim</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimFiyat">Fiyat (TL) *</label>
                        <input type="number" id="giyimFiyat" name="fiyat" required min="10" placeholder="250">
                    </div>
                    <div class="form-group">
                        <label for="giyimPazarlik">Pazarlık</label>
                        <select id="giyimPazarlik" name="pazarlik">
                            <option value="evet">Evet</option>
                            <option value="hayir">Hayır</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimSatici">Ad Soyad *</label>
                        <input type="text" id="giyimSatici" name="satici_adi" required placeholder="İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="giyimTelefon">Telefon *</label>
                        <input type="tel" id="giyimTelefon" name="telefon" required placeholder="0532 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="giyimSehir">Şehir *</label>
                        <input type="text" id="giyimSehir" name="sehir" required placeholder="İstanbul">
                    </div>
                    <div class="form-group">
                        <label for="giyimIlce">İlçe</label>
                        <input type="text" id="giyimIlce" name="ilce" placeholder="Kadıköy">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İlan Detayları</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="giyimBaslik">İlan Başlığı *</label>
                        <input type="text" id="giyimBaslik" name="baslik" required maxlength="120" placeholder="Nike Air Max 38 Numara - Az Kullanılmış">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="giyimAciklama">Açıklama *</label>
                        <textarea id="giyimAciklama" name="aciklama" required minlength="30" placeholder="Ürününüzün markasını, durumunu ve özelliklerini açıklayın..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-camera"></i> Fotoğraflar</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="photo-upload">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Ürün fotoğraflarını yükleyin</p>
                            <p><small>En az 2, en fazla 15 fotoğraf</small></p>
                            <input type="file" id="giyimFotolar" name="fotograflar" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function generateIsIlaniFormHTML() {
    return `
        <form class="car-form" id="isIlaniForm">
            <div class="form-section">
                <h4><i class="fas fa-briefcase"></i> İş İlanı Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="isUnvani">İş Unvanı *</label>
                        <input type="text" id="isUnvani" name="unvan" required placeholder="Frontend Developer, Pazarlama Uzmanı...">
                    </div>
                    <div class="form-group">
                        <label for="sirket">Şirket Adı *</label>
                        <input type="text" id="sirket" name="sirket_adi" required placeholder="ABC Teknoloji Ltd.">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="sektor">Sektör *</label>
                        <select id="sektor" name="sektor" required>
                            <option value="">Seçin</option>
                            <option value="teknoloji">Teknoloji</option>
                            <option value="finans">Finans</option>
                            <option value="egitim">Eğitim</option>
                            <option value="saglik">Sağlık</option>
                            <option value="perakende">Perakende</option>
                            <option value="turizm">Turizm</option>
                            <option value="insaat">İnşaat</option>
                            <option value="otomotiv">Otomotiv</option>
                            <option value="diger">Diğer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="deneyim">Deneyim *</label>
                        <select id="deneyim" name="deneyim_seviyesi" required>
                            <option value="">Seçin</option>
                            <option value="stajyer">Stajyer</option>
                            <option value="junior">Junior (0-2 yıl)</option>
                            <option value="mid">Mid-level (2-5 yıl)</option>
                            <option value="senior">Senior (5+ yıl)</option>
                            <option value="uzman">Uzman/Lead</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="calismaZamani">Çalışma Zamanı *</label>
                        <select id="calismaZamani" name="calisma_zamani" required>
                            <option value="">Seçin</option>
                            <option value="tam-zamanli">Tam Zamanlı</option>
                            <option value="yari-zamanli">Yarı Zamanlı</option>
                            <option value="freelance">Freelance</option>
                            <option value="staj">Staj</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="calismaModeli">Çalışma Modeli *</label>
                        <select id="calismaModeli" name="calisma_modeli" required>
                            <option value="">Seçin</option>
                            <option value="ofis">Ofiste</option>
                            <option value="uzaktan">Uzaktan</option>
                            <option value="hibrit">Hibrit</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-money-bill"></i> Maaş ve Yan Haklar</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="maasMin">Min Maaş (TL)</label>
                        <input type="number" id="maasMin" name="maas_min" min="5000" placeholder="15000">
                    </div>
                    <div class="form-group">
                        <label for="maasMax">Max Maaş (TL)</label>
                        <input type="number" id="maasMax" name="maas_max" min="5000" placeholder="25000">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="sgk" name="sgk_var">
                            <label for="sgk">SGK</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <div class="checkbox-group">
                            <input type="checkbox" id="yemek" name="yemek_yardimi">
                            <label for="yemek">Yemek Yardımı</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-phone"></i> İletişim Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="irtibatKisi">İrtibat Kişisi *</label>
                        <input type="text" id="irtibatKisi" name="irtibat_kisi" required placeholder="İK Departmanı / İsim Soyisim">
                    </div>
                    <div class="form-group">
                        <label for="irtibatTelefon">Telefon *</label>
                        <input type="tel" id="irtibatTelefon" name="telefon" required placeholder="0212 123 45 67">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">E-posta</label>
                        <input type="email" id="email" name="email" placeholder="hr@company.com">
                    </div>
                    <div class="form-group">
                        <label for="isSehir">Şehir *</label>
                        <input type="text" id="isSehir" name="sehir" required placeholder="İstanbul">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><i class="fas fa-edit"></i> İş Tanımı</h4>
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="isBaslik">İlan Başlığı *</label>
                        <input type="text" id="isBaslik" name="baslik" required maxlength="120" placeholder="Senior Frontend Developer - React">
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="isTanim">İş Tanımı *</label>
                        <textarea id="isTanim" name="is_tanimi" required minlength="100" placeholder="Pozisyonun detaylı açıklaması, sorumluluklar ve beklenen nitelikler..."></textarea>
                    </div>
                </div>
                
                <div class="form-row full-width">
                    <div class="form-group">
                        <label for="nitelikler">Aranan Nitelikler</label>
                        <textarea id="nitelikler" name="nitelikler" placeholder="Eğitim, deneyim, teknik beceriler, kişisel özellikler..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn btn-secondary">İptal</button>
                <button type="submit" class="btn btn-primary">İlanı Yayınla</button>
            </div>
        </form>
    `;
}

function handleCategoryFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    console.log('Form verisi:', data);
    alert('İlan başarıyla oluşturuldu! (Demo)');
    
    // Modal'ı kapat
    document.getElementById('quickPostModal').classList.remove('active');
    showCategoryStep();
}
