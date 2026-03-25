// firebase-messaging-sw.js

// Firebaseのライブラリを読み込みます
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// ★ここにステップ1でメモした firebaseConfig の中身を貼り付けます★
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// アプリがバックグラウンドの時に通知を受け取る処理
messaging.onBackgroundMessage(function(payload) {
  console.log('バックグラウンドでメッセージを受信しました: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // ※あなたのアプリのアイコン画像パスに合わせてください
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
