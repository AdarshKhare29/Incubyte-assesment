import { add } from "../hooks/useCalculator";

describe("String Calculator", () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });
});