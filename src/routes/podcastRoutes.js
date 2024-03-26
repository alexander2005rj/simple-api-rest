const podcastController = require('../controllers/podcastController');
module.exports = (app) => {
    app.post('/podcast', podcastController.post);
    app.put('/podcast/:id', podcastController.put);
    app.delete('/podcast/:id', podcastController.delete);
    app.get('/podcasts', podcastController.get);
    app.get('/podcast/:id', podcastController.getById);
}