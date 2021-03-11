const Employee = require("../lib/Employee");


describe("Employee", () => {

    it("should confirm Employee type", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true)
    });
    it("should set name from constructor", () => {
        const testValue = "Alice"
        const employee = new Employee(testValue);
        expect(employee).toHaveProperty("name", testValue);
        expect(employee.writeName()).toBe(testValue);
    });
    it("should set id from constructor", () => {
        const testValue = "1"
        const employee = new Employee("Alice", testValue);
        expect(employee).toHaveProperty("id", testValue);
        expect(employee.writeId()).toBe(testValue);
    });
    it("should set email from constructor", () => {
        const testValue = "test@email.com"
        const employee = new Employee("Alice", "1", testValue);
        expect(employee).toHaveProperty("email", testValue);
        expect(employee.writeEmail()).toBe(testValue);
    });
});
