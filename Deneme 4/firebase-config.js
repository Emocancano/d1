// Firebase Configuration
// Bu dosyayı Firebase Console'dan aldığınız bilgilerle güncelleyin

const firebaseConfig = {
  apiKey: "AIzaSyBMCZhqyuwyO3GjKGUMtzH9OLQUZnvLVoc",
  authDomain: "verde-11.firebaseapp.com",
  projectId: "verde-11",
  storageBucket: "verde-11.firebasestorage.app",
  messagingSenderId: "608685953860",
  appId: "1:608685953860:web:510443f1d1baf9146a3d11",
  measurementId: "G-3Z8PF9G64B"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);

// Firebase servislerini dışa aktar
const auth = firebase.auth();
const db = firebase.firestore();

// Google ve Facebook sağlayıcıları
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
