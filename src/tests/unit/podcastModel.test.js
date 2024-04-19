const models = require("../../models/podcastModel");

test("Method findIndexBy(0) should return index < 0", () => {
    const index = models.findIndexBy(0);
    expect(index).toBeLessThan(0);
});

test("Method findIndexBy(1) should return index >= 0", () => {
    const index = models.findIndexBy(1);
    expect(index).toBeGreaterThanOrEqual(0);
});

