const functions = require("firebase-functions");

const createUser = require("./create_user");

//function to create user
exports.createUser = functions.https.onRequest(createUser);
