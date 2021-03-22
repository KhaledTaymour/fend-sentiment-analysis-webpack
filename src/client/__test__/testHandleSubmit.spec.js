import "babel-polyfill";
import { handleSubmit } from "../js/formHandler";

describe("Test submit", () => {
  test("Test handleSubmit()", () => {
    expect(handleSubmit).toBeDefined();
  });
});
