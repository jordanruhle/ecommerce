const AdminController = require("../controllers/Admin.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get('/admin/:id', AdminController.findoneSingleAdmin);
  app.get('/api/admin', AdminController.getAllAdmins);
  app.post('/admin', AdminController.createNewAdmin);
  app.post('/admin/login', AdminController.adminLogin);
  app.post('/admin/logout', AdminController.adminLogout);
  app.get('/api/authenticate', authenticate )
}