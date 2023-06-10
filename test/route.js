// const supertest = require("supertest");
// const chai = require("chai");
// const sinon = require("sinon")
// const app = require("../index.js");
// const expect = chai.expect;

// // Get
// describe("GET /transaction/:userId/:year ", async () => {
//   it("should receive status code 401 (unauthorized)", async () => {
//     const response = await supertest(app).get("/transaction/1/2023");
//     expect(response.headers["content-type"]).equal("text/html; charset=utf-8");
//     expect(response.status).equal(401);
//   });

//   it("should recieve status code 200", async () => {
//     const response = await supertest(app).get("/transaction/1/2023");
//     expect(response.headers["content-type"]).equal("application/json; charset=utf-8");
//     expect(response.status).equal(200);
//     console.log(response.body);
//     // expect(response.body).equal("Incorrect path");
//   });
// });
