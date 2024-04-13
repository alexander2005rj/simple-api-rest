const podcastModel = require('../models/podcastModel.js')

exports.post = (req, res) => {
    podcastModel.createPodcast(req.body, res);
};

exports.get = (req, res) => {
    podcastModel.findPodcasts(res);
};

exports.getById = (req, res) => {
    podcastModel.findPodcastById(req.params.id, res);
};

exports.patch = (req, res) => {
    podcastModel.partialUpdatePodcast(req.body, req.params.id, res);
};

exports.put = (req, res) => {
    podcastModel.fullUpdatePodcast(req.body, req.params.id, res);
};

exports.delete = (req, res) => {
    podcastModel.deletePodcast(req.params.id, res);
};
