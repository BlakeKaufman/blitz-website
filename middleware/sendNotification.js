import * as admin from "firebase-admin";
var serviceAccount = require("../blitz-wallet-82b39-firebase-adminsdk-oz8m2-db83984822.json");

import * as apn from "apn";

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Set up the APNs provider with your key
const apnProvider = new apn.Provider({
  token: {
    key: "../AuthKey_DZWD6HDAJD.p8", // Path to the .p8 key file
    keyId: process.env.APN_KEY_ID, // Key ID from Apple Developer Account
    teamId: process.env.APN_TEAM_ID, // Team ID from Apple Developer Account
  },
  production: false, // Set to true for production environment
});

export default function sendNotification({
  devicePushKey,
  deviceType,
  amount,
  swapInfo,
  privateKey,
  preimage,
  liquidAddress,
}) {
  if (deviceType.toLowerCase() === "ios") {
    // Send a message to the device corresponding to the provided registration token
    // Create a notification
    let notification = new apn.Notification({
      alert: {
        title: `Receiving ${amount} sats`,
      },
      topic: "org.reactjs.native.example.BlitzWallet", // Replace with your app's bundle identifier
      payload: {
        swapInfo,
        privateKey,
        preimage,
        liquidAddress,
      },
      contentAvailable: 1,
    });

    // Send the notification
    apnProvider
      .send(notification, devicePushKey) // Replace with the device token
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });

    // Shut down the APNs provider
    apnProvider.shutdown();
    return;
  } else {
    const message = {
      notification: {
        title: `Receiving ${amount} sats`,
      },
      token: devicePushKey, // Replace with the device token
      contentAvailable: 1,
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
