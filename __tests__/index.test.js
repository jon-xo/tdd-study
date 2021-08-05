const intToRomanNumeral = require("../index");

// test("The sum of two intergers", () => {
//     // Expectation
//     expect(1+1).toBe(2);
// })

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

    const actual = intToRomanNumeral(1);

    const lambda = () => {
        intToRomanNumeral("dog")
    };

    // Expectation
    expect(lambda).toThrow(Error);
})