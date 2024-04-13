const podcastData = require('../data/podcasts.json');

function createPodcast(jsonBody, response) {
    const newPodcast = jsonBody;
    podcastData.push(newPodcast)
    response.status(201).json({ created: newPodcast, status: 'succeeded' })
}

function findPodcasts(response) {
    response.status(200).json(podcastData);
}

function findPodcastById(id, response) {
    const idx = podcastData.findIndex(podcastData => podcastData.id === parseInt(id))
    if (idx < 0) return response.status(404).json({ error: `podcast_id ${id} not found` })
    const podcastFound = podcastData.slice(idx);
    response.status(200).json({ podcastFound })
}

function updatePodcast(jsonBody, id, response) {
    const p = podcastData.find(p => p.id === parseInt(id))
    if (!p) return response.status(404).json({ error: `podcast_id ${id} not found` })
    const updatePodcast = jsonBody;
    podcastData[p] = { ...podcastData, ...updatePodcast };
    response.status(200).json({ status: 'succeeded' })
}

function deletePodcast(id, response) {
    const idx = podcastData.findIndex(podcastData => podcastData.id === parseInt(id))
    if (idx < 0) return response.status(404).json({ error: `podcast_id ${id} not found` })
    const deletedPodcast = podcastData.splice(idx, 1)
    response.status(200).json({ deletedPodcast })
}

module.exports = {
    createPodcast,
    findPodcasts,
    findPodcastById,
    updatePodcast,
    deletePodcast
}