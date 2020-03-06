/* eslint-disable no-console */

import { register } from "register-service-worker";

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification("Welcome !", {
          body: "I am Clark, what can i do for you ...?",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "welcome notification"
        });
      });
    }
  });
}

//if (process.env.NODE_ENV === "production") {
register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    console.log(
      "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
    );
  },
  registered() {
    console.log("Service worker has been registered.");
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated() {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  }
});
//}

if ("serviceWorker" in navigator) {
  console.log("Service Worker is supported!");
}
if ("PushManager" in window) {
  console.log("Push API Supported!" + Notification.permission);
}

const main = async () => {
  const permission = await requestNotificationPermission();
  showNotification();
};

setTimeout(showNotification, 3000);
