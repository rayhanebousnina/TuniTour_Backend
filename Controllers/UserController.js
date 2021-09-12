const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });

    const {
      firstName,
      lastName,
      email,
      birthDate,
      contactNumber,
      profilePicture,
    } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.hash_password, salt);
    const hash_password = hashPass;
    const _user = new User({
      firstName,
      lastName,
      email,
      birthDate,
      hash_password,
      contactNumber,
      profilePicture,
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (data) {
        return res.status(201).json({
          message: "User created successfully.",
          data,
        });
      }
    });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPass = await bcrypt.compare(
        req.body.hash_password,
        user.hash_password
      );
      if (isPass) {
        const token = jwt.sign(
          {
            _id: user._id,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            birthDate: user.birthDate,
            contactNumber: user.contactNumber,
            profilePicture: user.profilePicture,
          },
          "MY_SECRET",
          {
            expiresIn: "2h",
          }
        );
        //   const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          //  user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};

// exports.requireLogin = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const user = jwt.verify(token, "MY_SECRET");
//   req.user = user;
//   next();
// };
