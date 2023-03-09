const Admins = require("../models/Admin.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


// Read All
module.exports.getAllAdmins = (req, res) => {
  Admins.find()
    .then(allAdmins => res.json({ admin: allAdmins }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Find One
module.exports.findoneSingleAdmin = (req, res) => {
  Admins.findOne({ _id: req.params.id })
    .then(oneSingleAdmin => res.json({ admin: oneSingleAdmin }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Create One
module.exports.createNewAdmin = async (req, res) => {
  console.log(req.body)
  const newAdmin = new Admins(req.body);
  try {
    await newAdmin.save()
    console.log(newAdmin)
    const payload = {
      id: newAdmin._id
    }
    const adminToken = jwt.sign(payload, process.env.ADMIN_LOGIN_REG_SECRET_KEY)
    console.log(adminToken);
    res.json({ msg: "success!", admin: admin, adminToken: adminToken });
  } catch (err) {
    res.json(err)
  }
}

// variable = function for login
module.exports.adminLogin = async (req, res) => {
  console.log("got to admin login");
  console.log(req.body);
  // takes request = email + password
  const { email, password } = req.body;
  try {
    // checks if email is in the Database
    const admin = await Admins.findOne({ email: email })

    const matchedPasswords = await bcrypt.compare(password, admin.password)

    console.log(admin.password);
    console.log(password);
    // checks if password associated with email matches given password
    if (matchedPasswords) {
      console.log("made it to the if");
      // Build Response
      const payload = {
        id: admin._id
      }
      // create JWT
      const adminToken = jwt.sign(payload, process.env.ADMIN_LOGIN_REG_SECRET_KEY)
      console.log(adminToken);
      // respond message + JWT
      res.json({ msg: "login succesful", adminToken: adminToken })
    }
  } catch (err) {
    console.log(err);
    // catch if the shit above breaks
    // send err and error message
    res.json(err)
  }
}
