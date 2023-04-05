const jwt = require("jsonwebtoken");
 
module.exports.authenticate =async (req, res, next) => {
  const adminToken = req.cookies.adminToken;
  console.log("admin token: " + adminToken)
  try {
    const decoded = jwt.verify(adminToken, process.env.ADMIN_LOGIN_REG_SECRET_KEY)
    const adminId = decoded.id
    console.log("admin id: " + adminId)
    res.json({verified: true})
  } catch (err) {
    res.json('401 You are unauthorized!')
  }
}