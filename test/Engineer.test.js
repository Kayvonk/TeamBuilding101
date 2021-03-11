const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("should construct engineer", () => {
        const testValue = "engineer";
        const employee = new Engineer();
        expect(employee instanceof Employee).toBe(true);
        expect(employee instanceof Engineer).toBe(true);
    });
    it("should set github from constructor", () => {
        const testValue = "Username";
        const employee = new Engineer("Alice", "1", "test@email.com", testValue);
        expect(employee).toHaveProperty("github", testValue);
        expect(employee.writeGithub()).toBe(testValue);
    });
});

