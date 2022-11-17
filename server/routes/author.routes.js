const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.findoneSingleAuthor);
    app.post('/api/author', AuthorController.createNewAuthor);
    app.put('/api/author/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}