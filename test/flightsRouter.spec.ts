import { fakeApp } from "./app.mock";

describe("flights router", () => {
  it("gets the specified flight", async () => {
    const { agent } = await fakeApp();
    const response = await agent.get("/flights/123");
    const data = response.body.data;
    expect(data).toEqual("ok");
  });
});
