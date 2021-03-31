const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it("should create a new Intern object with name, id, email, and school properties", () => {
      
      const name = "Griffin";
      const id = 512;
      const email = "grif@test.com";
      const school = "Loyola University Maryland";
      const grif = new Intern(name, id, email, school);

      expect(grif.name).toEqual(name);
      expect(grif.id).toEqual(id);
      expect(grif.email).toEqual(email);
      expect(grif.gihub).toEqual(school);
    });
  });

  describe('getschool()', () => {
    it("should return inputted intern.school when intern.getSchool() is called", () => {

      const school = "github.com/notarealaccount";
      const donna = new Intern("donna", 111, "donna@test.com", school);

      expect(donna.getSchool()).toEqual(school);
    });
  });

  describe("getRole()", () => {
    it("should return 'Intern' when intern.getRole() is called", () => {

      const role = "Intern";
      const laura = new Intern("Laura", 187, "laura@test.com", "UConn");

      expect(laura.getRole()).toEqual(role);
    });
  });
});
