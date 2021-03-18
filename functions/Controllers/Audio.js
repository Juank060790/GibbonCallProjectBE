const { db, admin } = require("../Utils/admin");
const config = require("../Utils/config");
const firebase = require("firebase");

// To UPDATE COLLECTION NAME
exports.getAudioList = (req, res) => {
  db.collection("rawData")
    // .orderBy()
    .limit(10)
    .get()
    .then((data) => {
      let audioList = [];
      data.forEach((doc) => {
        audioList.push(doc.data());
      });
      return res.json(audioList);
    })
    .catch((err) => console.error(err));
};

exports.getSingleAudio = (req, res) => {
  let singleAudio = {};
  console.log("SINGLEAUDIO", req.params.audioId);
  const reqAudio = req.params.audioId;
  db.doc("rawData/" + reqAudio)
    .get()
    .then((doc) => {
      // console.log("DOOOCCC", doc);
      if (doc.exists) {
        singleAudio = doc.data();
        return res.json(singleAudio);
      } else {
        return res.status(404).json({ error: "Audio not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.deleteSingleAudio = (req, res) => {
  console.log("DeleteSINGLEAUDIO", req.params.audioId);
  db.collection("rawData")
    .doc(`${req.params.audioId}`)
    .delete()
    .then(() => {
      console.log("Audio successfully deleted!");
      return res.status(200).json("Audio successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

exports.createSingleAudio = (req, res) => {
  const createAudio = {
    audioId: req.body.audioId,
    audioLink: req.body.audioLink,
    comments: req.body.comments,
    duration: req.body.duration,
    fileName: req.body.fileName,
    gibbonCalls: req.body.gibbonCalls,
    recordDate: req.body.recordDate,
  };

  db.doc(`/rawData/${createAudio.audioId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ userName: "this audio can not be added" });
      } else {
        return db.doc(`/rawData/${createAudio.audioId}`).set(createAudio);
      }
    })
    .then(() => {
      return res
        .status(201)
        .json({ createAudio })
        .catch((err) => {
          return res.status(500).json({ error: err.code });
        });
    });
};

//       console.error(err);
//       if (err.code === "auth/email-already-in-use") {
//         return res.status(400).json({ email: "Email is already in use" });
//       } else {
//       }
//     });

// db.doc(`/users/${newUser.userName}`)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         return res
//           .status(400)
//           .json({ userName: "this email has already taken" });
//       } else {
//         return firebase
//           .auth()
//           .createUserWithEmailAndPassword(newUser.email, newUser.password);
//       }
//     })
//     .then((data) => {
//       userId = data.user.uid;
//       return data.user.getIdToken();
//     })
//     .then((idToken) => {
//       token = idToken;

//       const hashedPassword = bcrypt.hashSync(newUser.password, 6);

//       const userCredentials = {
//         userName: newUser.userName,
//         email: newUser.email,
//         password: hashedPassword,
//         createdAt: new Date().toISOString(),
//         userId,
//       };
//       return db.doc(`/users/${newUser.userName}`).set(userCredentials);
//     })
//     .then(() => {
//       return res.status(201).json({ token });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err.code === "auth/email-already-in-use") {
//         return res.status(400).json({ email: "Email is already in use" });
//       } else {
//         return res.status(500).json({ error: err.code });
//       }
//     });
// };
