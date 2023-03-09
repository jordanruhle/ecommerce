const Admins = require("../models/Admin.model")
const jwt = require("jsonwebtoken");


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
  } catch(err) {
    res.json(err)
  } 
}

// variable = function for login
// takes request = email + password
// checks if email is in the Database
// Admin.findOne({ username: { $regex: /^john$/i } }, function(err, admin) {
//   // ...
// });
// checks if password associated with email matches given password
// 
// Build Response
// create JWT
// respond message + JWT

// catch if the shit above breaks
// send err and error message