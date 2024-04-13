const podcastData = require('../data/podcasts.json');

function findIndexBy(id) {
    const index = podcastData.findIndex(podcastData => podcastData.id === parseInt(id))
    return index;
}

function createPodcast(jsonBody, response) {
    const newPodcast = jsonBody;
    const index = findIndexBy(jsonBody.id);
    if (index >= 0) return response.status(400).json({ error: `podcast_id ${newPodcast.id} already exists` });
    podcastData.push(newPodcast)
    response.status(201).json({ created: newPodcast, status: 'succeeded' })
}

function findPodcasts(response) {
    response.status(200).json(podcastData);
}

function findPodcastById(id, response) {
    const index = findIndexBy(id)
    if (index < 0) return response.status(404).json({ error: `podcast_id ${id} not found` })
    const podcastFound = podcastData.slice(index, index + 1);
    response.status(200).json({ podcastFound })
}

function partialUpdatePodcast(jsonBody, id, response) {
    const index = findIndexBy(id);
    if (index < 0) return response.status(404).json({ error: `podcast_id ${id} not found` });
    const partialData = jsonBody;
    if (jsonBody.podcastName) podcastData[index].podcastName = partialData.podcastName;
    if (jsonBody.topic) podcastData[index].topic = partialData.topic;
    if (jsonBody.stars) podcastData[index].stars = partialData.stars;
    response.status(200).json({ updated: partialData, status: 'succeeded' })
}

function fullUpdatePodcast(jsonBody, id, response) {
    const index = findIndexBy(id);
    if (index < 0) return response.status(404).json({ error: `podcast_id ${id} not found` });
    const otherPodcast = Object.assign({ id: parseInt(id) }, jsonBody);
    podcastData.splice(index, 1, otherPodcast)
    response.status(200).json({ updated: otherPodcast, status: 'succeeded' })
}

function deletePodcast(id, response) {
    const index = findIndexBy(id);
    if (index < 0) return response.status(404).json({ error: `podcast_id ${id} not found` });
    const deletedPodcast = podcastData.splice(index, 1)
    response.status(200).json({ deletedPodcast })
}

module.exports = {
    createPodcast,
    findPodcasts,
    findPodcastById,
    partialUpdatePodcast,
    fullUpdatePodcast,
    deletePodcast
}