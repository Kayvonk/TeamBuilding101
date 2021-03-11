const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Engineer", () => {

    it("should construct intern", () => {
        const testValue = "intern";
        const employee = new Intern();
        expect(employee instanceof Employee).toBe(true);
        expect(employee instanceof Intern).toBe(true);
    });
    it("should set school from constructor", () => {
        const testValue = "College University";
        const employee = new Intern("Alice", "1", "test@email.com", testValue);
        expect(employee).toHaveProperty("school", testValue);
        expect(employee.writeSchool()).toBe(testValue);
    });
});