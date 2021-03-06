const { admin } = require("firebase-admin");
const { ref } = require("firebase-functions/lib/providers/database");

module.exports = function (req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: "Phone and Code must be provided" });
  }

  const phone = String(req.body.phone).replace(/[^d]/g, "");

  const code = parseInt(req.body.code);

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      const ref = admin.database
        .ref("users/" + phone)
        .on("value", (snapshot) => {
          ref.off();
          const user = snapshot.val();

          if (user.code !== code || !user.codeValid) {
            return res.status(422).send({ error: "Code not Valid" });
          }

          ref.update({ codeValid: false });

          admin
            .auth()
            .createCustomToken(phone)
            .then((token) => {
              res.send({ token: token });
              return;
            })
            .catch((err) => {
              return res.status(422).send({ error: err });
            });
        });
      return;
    })
    .catch((res) => {
      return res.status(422).send({ error: err });
    });
};
