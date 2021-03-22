import "babel-polyfill";

const request = require("supertest");
const { app } = require("../index");

describe("Test BE Server", () => {
  describe("Test POST request", () => {
    it("should test POST request", async () => {
      const res = await request(app).post("/test").send({
        title: "this is a message",
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("post");
    });
  });
});
