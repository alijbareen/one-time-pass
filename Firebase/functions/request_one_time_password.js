const admin = require("firebase-admin");

const twilio = require("./twilio");

module.exports = function (req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: "Phone is Not Valid" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then((userRecord) => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      twilio.messages.create(
        {
          body: "Your Code is " + code,
          to: "+972" + phone,
          from: "+17609907176",
        },
        (err) => {
          if (err) {
            return res.status(422).send({ error: err });
          }

          admin
            .database()
            .ref("users/" + phone)
            .update({ code: code, codeValid: true }, () => {
              res.send({ success: true });
            });
        }
      );
    })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
};
