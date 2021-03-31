const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it("should create a new Employee object with name, id, and email properties", () => {
      
      const name = "Bill";
      const id = 101;
      const email = "bill@test.com";
      const bill = new Employee(name, id, email);

      expect(bill.name).toEqual(name);
      expect(bill.id).toEqual(id);
      expect(bill.email).toEqual(email);
    });
  });

  describe('getName()', () => {
    it("should return the inputted employee.name when employee.getName() is called", () => {
      
      const name = "Jill";
      const jill = new Employee(name, 17, "jill@test.com");

      expect(jill.getName()).toEqual(name);
    });
  });

  describe('getId()', () => {
    it("should return the inputted employee.id when employee.getId() is called", () => {

      const id = 300;
      const phil = new Employee("Phil", id, "phil@test.com");

      expect(phil.getName()).toEqual(id);
    });
  });

  describe('getEmail()', () => {
    it("should return the inputted employee.email when employee.getEmail() is called", () => {

      const email = "will@test.com";
      const will = new Employee("Will", 99, email);

      expect(will.getEmail()).toEqual(email);
    });
  });

  describe('getRole()', () => {
    it('should return "Employee" when the employee.getRole() is called', () => {
      const role = "Employee"
      const lil = new Employee("Lilly", 925, "lilly@test.com");

      expect(lil.getRole()).toEqual(role);
    });
  });
});
