const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it("should create a new Manager object with name, id, email, and officeNumber properties", () => {
      
      const name = "Diane";
      const id = 808;
      const email = "diane@test.com";
      const officeNumber = 404;
      const diane = new Manager(name, id, email, officeNumber);

      expect(diane.name).toEqual(name);
      expect(diane.id).toEqual(id);
      expect(diane.email).toEqual(email);
      expect(diane.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getRole()", () => {
    it("should return 'Manager' when manager.getRole() is called", () => {

      const role = "Manager";
      const richard = new Manager("Richard", 1020, "rich@test.com", 55);

      expect(richard.getRole()).toEqual(role);
    });
  });
});
