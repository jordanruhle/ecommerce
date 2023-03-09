const AdminController = require("../controllers/Admin.controller")

module.exports = app => {
  app.get('/admin/:id', AdminController.findoneSingleAdmin);
  app.get('/api/admin', AdminController.getAllAdmins);
  app.post('/admin', AdminController.createNewAdmin);
  app.post('/admin/login', AdminController.adminLogin);
}