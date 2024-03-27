const podcastData = require('../data/podcasts.json')
const errorMessages = require('../data/errorMessages.json')
const successMessages = require('../data/successMessages.json')

exports.post = (req, res, next) => {
    res.status(201).send('Rota POST!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
    res.status(200).json(podcastData);
};

exports.getById = (req, res, next) => {
    let id = Number.parseInt(req.params.id);
    if (id === 0) {
        res.status(404).json(errorMessages[`${id}`])
    }
    if (id > 0) {
        id--;
        res.status(200).json(podcastData[`${id}`]);
    }
};