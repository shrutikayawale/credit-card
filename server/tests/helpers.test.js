const { addDigits, isValidLuhn } = require('../helpers/creditNumberValidator');

describe("Helpers Test Suite", () => {

  it("Test addDigits - Should return 4", () => {
    const result = addDigits('22');
    expect(result).toBe(4);
  });

  it("Test isValidLuhn - Should say this is valid card number", () => {
    const result = isValidLuhn('79927398713');
    expect(result).toBe(true);
  });
  
});