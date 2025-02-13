function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect. It should handle the case when only one of them is 0
  } else {
    return a / b; 
  }
}