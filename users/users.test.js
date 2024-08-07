import { test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";
import { resetUsersTable } from "../db/helpers.js";

test("GET /api/health works", async () => {
  const response = await request(app).get("/api/health");
  expect(response.body).toEqual({
    success: true,
    payload: "API is running correctly",
  });
  console.log(response);
  expect(response.status).toEqual(200);
});

// write a test skeleton with a descriptive test name ("GET /api/users" could be a starting point) ✅
test("GET /api/users"),
  async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({
      success: true,
      payload: expect.any(Array),
    });
    response.body.payload.forEach((user) => {
      expect(user).toEqual({
        id: expect.any(Number),
        username: expect.any(String),
      });
    });
  };

// run tests to make sure the skeleton passes on its own ✅
// then within the test:
//    ARRANGE:
//      use the `resetUsersTable` function to reset the database table to a known state ✅
//    ACT:
//      use Supertest to send a GET request to the `/api/users` endpoint✅
//      wait for the response✅
//    ASSERT:
//      assert that the response body is an object
//      assert that response body.success is true ✅
//      assert that response body.payload is an array
//      loop over the payload array. for each user object in the payload array:
//          assert that user object.id is a number
//          assert that user object.username is a string
//      assert that the response status code is 200
//      assert that there's a Content-Type response header which contains `application/json`
//      any other assertions that you think would be useful
// run tests to ensure they passes
// temporarily break the implementation in `users/users.controller.js` to ensure test fails and then change back so that tests pass
