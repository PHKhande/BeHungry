import sum from "../sum";

test("sum of two positive numbers", () => {
    expect(sum(1,4)).toBe(5);
});