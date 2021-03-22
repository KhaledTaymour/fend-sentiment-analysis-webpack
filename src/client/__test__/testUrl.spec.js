// TODO: import the url check function
import { validateURL } from "../js/urlChecker";

describe("Test check URL functionality working", () => {
  test("Testing the validateURL function", () => {
    expect(validateURL).toBeDefined();
  });

  test("validateURL return false if URL is invalid", () => {
    expect(validateURL("blablabla")).toBeFalsy();
  });

  test("validateURL return true if URL is valid", () => {
    expect(validateURL("google.com")).toBeTruthy();
  });
});
