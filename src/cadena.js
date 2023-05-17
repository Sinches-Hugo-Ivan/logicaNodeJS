function number_cardinality(number) {
    const lastDigit = number % 10;
  
    if (lastDigit === 0) {
      return "zero";
    } else if (lastDigit === 5) {
      return "five";
    } else if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

console.log(number_cardinality(100));