// Firebase Authentication İşlemleri

// Kullanıcı kaydı (Email & Password)
async function signUpWithEmail(email, password, displayName) {
    try {
        // Kullanıcıyı oluştur
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Kullanıcı profil bilgilerini güncelle
        await user.updateProfile({
            displayName: displayName
        });

        // Firestore'da kullanıcı verisi oluştur
        await db.collection('users').doc(user.uid).set({
            displayName: displayName,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: null,
            phoneNumber: null
        });

        // E-posta doğrulama gönder
        await user.sendEmailVerification();

        return { success: true, user: user };
    } catch (error) {
        console.error('Kayıt hatası:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Kullanıcı girişi (Email & Password)
async function signInWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Giriş hatası:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Google ile giriş
async function signInWithGoogle() {
    try {
        const result = await auth.signInWithPopup(googleProvider);
        const user = result.user;

        // Yeni kullanıcı ise Firestore'a kaydet
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                provider: 'google'
            });
        }

        return { success: true, user: user };
    } catch (error) {
        console.error('Google giriş hatası:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Facebook ile giriş
async function signInWithFacebook() {
    try {
        const result = await auth.signInWithPopup(facebookProvider);
        const user = result.user;

        // Yeni kullanıcı ise Firestore'a kaydet
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                provider: 'facebook'
            });
        }

        return { success: true, user: user };
    } catch (error) {
        console.error('Facebook giriş hatası:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Çıkış yap
async function signOut() {
    try {
        await auth.signOut();
        return { success: true };
    } catch (error) {
        console.error('Çıkış hatası:', error);
        return { success: false, error: error.message };
    }
}

// Şifre sıfırlama e-postası gönder
async function sendPasswordReset(email) {
    try {
        await auth.sendPasswordResetEmail(email);
        return { success: true };
    } catch (error) {
        console.error('Şifre sıfırlama hatası:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

// Kullanıcı oturum durumunu dinle
function onAuthStateChanged(callback) {
    return auth.onAuthStateChanged((user) => {
        if (user) {
            // Kullanıcı giriş yapmış
            callback({ isLoggedIn: true, user: user });
        } else {
            // Kullanıcı giriş yapmamış
            callback({ isLoggedIn: false, user: null });
        }
    });
}

// Kullanıcı bilgilerini Firestore'dan al
async function getUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, error: 'Kullanıcı bulunamadı' };
        }
    } catch (error) {
        console.error('Veri alma hatası:', error);
        return { success: false, error: error.message };
    }
}

// Kullanıcı profilini güncelle
async function updateUserProfile(uid, data) {
    try {
        await db.collection('users').doc(uid).update(data);
        
        // Auth profili de güncelle
        const user = auth.currentUser;
        if (user && data.displayName) {
            await user.updateProfile({
                displayName: data.displayName
            });
        }
        
        return { success: true };
    } catch (error) {
        console.error('Profil güncelleme hatası:', error);
        return { success: false, error: error.message };
    }
}

// Hata mesajlarını Türkçeleştir
function getErrorMessage(errorCode) {
    const errorMessages = {
        'auth/email-already-in-use': 'Bu e-posta adresi zaten kullanımda.',
        'auth/invalid-email': 'Geçersiz e-posta adresi.',
        'auth/operation-not-allowed': 'Bu işlem şu anda kullanılamıyor.',
        'auth/weak-password': 'Şifre çok zayıf. En az 6 karakter olmalıdır.',
        'auth/user-disabled': 'Bu hesap devre dışı bırakılmış.',
        'auth/user-not-found': 'Kullanıcı bulunamadı.',
        'auth/wrong-password': 'Yanlış şifre.',
        'auth/too-many-requests': 'Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin.',
        'auth/network-request-failed': 'Ağ bağlantısı hatası.',
        'auth/popup-closed-by-user': 'Giriş penceresi kapatıldı.',
        'auth/cancelled-popup-request': 'Giriş işlemi iptal edildi.',
        'auth/account-exists-with-different-credential': 'Bu e-posta adresi farklı bir giriş yöntemiyle kullanılıyor.'
    };

    return errorMessages[errorCode] || 'Bir hata oluştu. Lütfen tekrar deneyin.';
}

// E-posta doğrulama kontrolü
function isEmailVerified() {
    const user = auth.currentUser;
    return user ? user.emailVerified : false;
}

// Mevcut kullanıcıyı al
function getCurrentUser() {
    return auth.currentUser;
}
