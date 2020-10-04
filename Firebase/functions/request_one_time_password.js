const admin = require("firebase-admin");

module.exports = function (req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: "Phone is Not Valid" });
  }

  const phone = String(req.body.phone); //.replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then((userRecord) => {});
};
