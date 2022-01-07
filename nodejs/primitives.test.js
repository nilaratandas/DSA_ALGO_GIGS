const primitives = require("./Primitives");
const { expect, it } = require("@jest/globals");

describe("======= Check is number is Palindrome. isPalindrome() ============= ", () => {
  it("Retrun false when input is in string format", () => {
    expect(primitives.isPalindrome("34SS34")).toEqual(false);
  });

  it("Retrun false when input is negative numbers", () => {
    expect(primitives.isPalindrome(-222)).toEqual(false);
  });

  it("Palindrome number 1213121, it returns true as the given number is palindrome", () => {
    expect(primitives.isPalindrome(1213121)).toEqual(true);
  });
});

describe("======= Sum of two binary numbers with predefind functions. additionOfBinary() ============= ", () => {
  it("Retrun empty if bNum_1 = '', bNum_2 = ''", () => {
    expect(primitives.additionOfBinary("", "")).toEqual('');
  });

  it("bNum_1 = '101', bNum_2 = '001'. Result should be 110 ", () => {
    expect(primitives.additionOfBinary("101", "001")).toEqual("110");
  });

  it("bNum_1 = '101', bNum_2 = '1'. Result should be 110", () => {
    expect(primitives.additionOfBinary("101", "001")).toEqual("110");
  });
});

describe("======= Sum of two binary numbers without predefind functions. additionOfBinary() ============= ", () => {
  it("Retrun empty if bNum_1 = '', bNum_2 = ''", () => {
    expect(primitives.additionOfBinaryWithoutBuiltinFunction("", "")).toEqual('');
  });

  it("bNum_1 = '101', bNum_2 = '001'. Result should be 110 ", () => {
    expect(primitives.additionOfBinaryWithoutBuiltinFunction("101", "001")).toEqual("110");
  });

  it("bNum_1 = '101', bNum_2 = '1'. Result should be 110", () => {
    expect(primitives.additionOfBinaryWithoutBuiltinFunction("101", "001")).toEqual("110");
  });
});
