//service-access for all the app credintials
//service-account allow us to edit the database
const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json");
const functions = require("firebase-functions");

const createUser = require("./create_user");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-b8290.firebaseio.com",
});

//function to create user
exports.createUser = functions.https.onRequest(createUser);
