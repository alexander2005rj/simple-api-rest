const controllers = require("../../controllers/podcastController");

test("GET to /api/v1/podcasts should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/podcasts");
    expect(response.status).toBe(200);
});

test("GET to /api/v1/podcast/1 should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/podcast/1");
    expect(response.status).toBe(200);
});

test("DELETE to /api/v1/podcast/3 should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/podcast/3");
    expect(response.status).toBe(200);
});

test("Simulating 404 error should return 404", () => {
    const req = {};
    const res = { render: jest.fn() };
    controllers.notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("404");
});

test("Simulating 500 error should return 500", () => {
    const err = new Error("some error");
    const req = {};
    const res = { render: jest.fn() };
    const next = jest.fn();
    controllers.serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("500");
});
