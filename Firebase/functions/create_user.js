const admin = require("firebase-admin");

module.exports = function (req, res) {
  //verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: "bad Input" });
  }

  //format the phone number to remove dashes etc...
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  //create a new user account using the phone number
  admin
    .auth()
    .createUser({
      uid: phone,
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(422).send({ error: err }));
  //respond to the user saying that the client was made
};
