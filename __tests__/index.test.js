const intToRomanNumeral = require("../index");

// test("The sum of two intergers", () => {
//     // Expectation
//     expect(1+1).toBe(2);
// })

// Solve for happy path then handle edge cases 

test("Accept int 1 and output roman numeral I", () => {
    // Arrange
    // Act
    // Acert

    const actual = intToRomanNumeral(1);

    // Expectation
    expect(actual).toBe("I");
})

test("Accept string dog and output exception", () => {
    // Arrange
    // Act
    // Acert

    const lambda = () => {
        intToRomanNumeral("dog")
    };

    // Expectation
    expect(lambda).toThrow(Error);
})

test("Accept int 2 and output roman numeral II", () => {
    // Arrange
    // Act
    // Acert

    const actual = intToRomanNumeral(2);

    // Expectation
    expect(actual).toBe("II");
})