import { add } from "../hooks/useCalculator";

describe("String Calculator", () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });
    test("should return the number itself for a single number", () => {
        expect(add("1")).toBe(1);
    });
    test("should return the sum of two comma-separated numbers", () => {
        expect(add("1,5")).toBe(6);
    });

    test("should handle an unknown number of comma-separated numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
    });
});