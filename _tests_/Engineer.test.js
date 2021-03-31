const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it("should create a new Engineer object with name, id, email, and github properties", () => {
      
      const name = "Mark";
      const id = 999;
      const email = "mark@test.com";
      const github = "github.com/justatest";
      const mark = new Engineer(name, id, email, github);

      expect(mark.name).toEqual(name);
      expect(mark.id).toEqual(id);
      expect(mark.email).toEqual(email);
      expect(mark.gihub).toEqual(github);
    });
  });

  describe('getGithub()', () => {
    it("should return inputted engineer.github when engineer.getGithub() is called", () => {

      const github = "github.com/notarealaccount";
      const lena = new Engineer("Lena", 777, "lena@test.com", github);

      expect(lena.getGithub()).toEqual(github);
    });
  });

  describe("getRole()", () => {
    it("should return 'Engineer' when engineer.getRole() is called", () => {

      const role = "Engineer";
      const jason = new Engineer("Jason", 253, "jason@test.com", "github.com/atotallyrealprofile");

      expect(jason.getRole()).toEqual(role);
    });
  });
});
