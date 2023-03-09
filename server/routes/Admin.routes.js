const AdminController = require("../controllers/Admin.controller")

module.exports = app => {
  app.get('/admin/:id', AdminController.findoneSingleAdmin);
  app.get('/api/admin', AdminController.getAllAdmins);
  app.post('/admin', AdminController.createNewAdmin);
  // post Route, calls the controller for login
}