const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Engineer", () => {

    it("should construct manager", () => {
        const testValue = "manager";
        const employee = new Manager();
        expect(employee instanceof Employee).toBe(true);
        expect(employee instanceof Manager).toBe(true);
    });
    it("should set office number from constructor", () => {
        const testValue = "1234";
        const employee = new Manager("Alice", "1", "test@email.com", testValue);
        expect(employee).toHaveProperty("officeNumber", testValue);
        expect(employee.writeOfficeNumber()).toBe(testValue);
    });
});