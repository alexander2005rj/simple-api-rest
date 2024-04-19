const podcastController = require("../controllers/podcastController");
module.exports = (app) => {
  app.post("/api/v1/podcast", podcastController.post);
  app.get("/api/v1/podcasts", podcastController.get);
  app.get("/api/v1/podcast/:id", podcastController.getById);
  app.patch("/api/v1/podcast/:id", podcastController.patch);
  app.put("/api/v2/podcast/:id", podcastController.put);
  app.delete("/api/v1/podcast/:id", podcastController.delete);
};
