function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // or throw new Error("Both a and b cannot be 0")
  } else if (a === 0) {
    return 0; // Or throw error
  } else if (b === 0) {
    return Infinity; // Or throw new Error("Cannot divide by zero");
  } else {
    return a / b;
  }
}