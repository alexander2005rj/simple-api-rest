const podcastData = require('../data/podcasts.json')

exports.post = (req, res) => {
    res.status(201).json({ created: req.body, status: 'succeeded' })
};

exports.put = (req, res) => {
    const p = podcastData.find(p => p.id === parseInt(req.params.id))
    if (!p) return res.status(404).json({ error: `podcast_id ${req.params.id} not found` })
    console.log(req.body)
    res.status(200).json({ status: 'succeeded' })
};

exports.delete = (req, res) => {
    const idx = podcastData.findIndex(podcastData => podcastData.id === parseInt(req.params.id))
    if (idx < 0) return res.json({ error: `podcast_id ${req.params.id} not found` })
    const deletedPodcast = podcastData.splice(idx, 1)
    res.status(200).json({ deletedPodcast })
};

exports.get = (req, res) => {
    res.status(200).json(podcastData);
};

exports.getById = (req, res) => {
    const idx = podcastData.findIndex(podcastData => podcastData.id === parseInt(req.params.id))
    if (idx < 0) return res.json({ error: `podcast_id ${req.params.id} not found` })
    const podcastFound = podcastData.slice(idx);
    res.status(200).json({ podcastFound })
};