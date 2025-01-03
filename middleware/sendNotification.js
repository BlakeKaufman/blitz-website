import * as admin from "firebase-admin";
import * as apn from "apn";
import { Expo } from "expo-server-sdk";

let expo = new Expo({
  accessToken: process.env.EXPO_ACCESS_TOKEN,
});
var serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Set up the APNs provider with your key
const apnProvider = new apn.Provider({
  token: {
    key: process.env.APPLE_KEY, // Path to the .p8 key file
    keyId: process.env.APN_KEY_ID, // Key ID from Apple Developer Account
    teamId: process.env.APN_TEAM_ID, // Team ID from Apple Developer Account
  },
  production: false, // Set to true for production environment
});

export async function sendNotification({
  devicePushKey,
  deviceType,
  amount,
  swapInfo,
  privateKey,
  preimage,
  liquidAddress,
}) {
  try {
    if (!Expo.isExpoPushToken(devicePushKey)) return;

    const didSend = await expo.sendPushNotificationsAsync([
      {
        to: `${devicePushKey}`,
        sound: "default",
        // aps: {
        //   "content-available": 1,
        // },
        _contentAvailable: true,
        mutableContent: true,
        priority: "high",
        title: "Blitz Wallet",

        body: "Received background payment, open app to claim",
        data: {
          swapInfo,
          privateKey,
          preimage,
          liquidAddress,
        },
      },
    ]);

    return didSend.filter((item) => item.status === "ok").length;
  } catch (err) {
    console.log(err);
    return false;
  }

  return;
  if (deviceType.toLowerCase() === "ios") {
    // Send a message to the device corresponding to the provided registration token
    // Create a notification
    let notification = new apn.Notification({
      alert: {
        title: "Payment received",
      },
      topic: "org.reactjs.native.example.BlitzWallet", // Replace with your app's bundle identifier
      payload: {
        swapInfo,
        privateKey,
        preimage,
        liquidAddress,
      },
      contentAvailable: 1,
      // aps: {
      //   "content-available": 1, // This makes it a background notification
      //   // sound: "default", // Optional: adds sound to notification
      //   // badge: 1, // Optional: adds badge to the app icon
      // },
    });

    // Send the notification
    apnProvider
      .send(notification, devicePushKey) // Replace with the device token
      .then((result) => {
        console.log(result);
        apnProvider.shutdown();
      })
      .catch((err) => {
        console.error(err.failed);
      });

    return;
  } else {
    const message = {
      to: devicePushKey,
      notification: {
        title: `Blitz wallet running in the background`,
        // body: "This is a background notification for Android",
        // click_action: "FLUTTER_NOTIFICATION_CLICK",
      },
      data: {
        swapInfo,
        privateKey,
        preimage,
        liquidAddress,
      },
      content_available: true,
      priority: "high",
    };

    admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Successfully sent message:", response);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }
}
