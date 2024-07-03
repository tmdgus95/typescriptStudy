/**
 * Let's make a calculator 🧮
 */
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

type calculateType = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(type: calculateType, first: number, second: number): number {
  switch (type) {
    case "add":
      return first + second;
    case "substract":
      return first - second;
    case "multiply":
      return first * second;
    case "divide":
      if (second === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return Math.floor(first / second);
    case "remainder":
      return first % second;
    default:
      throw new Error("Invalid calculation type.");
  }
}
