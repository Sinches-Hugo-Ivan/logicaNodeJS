function range_vision(number) {
    const digits = String(number).split('').map(Number); // Convertir el número en un array de dígitos
  
    let minVisionValue = Infinity;
  
    for (let i = 0; i < digits.length; i++) {
      const leftRange = digits.slice(0, i);
      const rightRange = digits.slice(i + 1);
  
      const visionValue = leftRange.reduce((sum, digit) => sum + digit, 0) +
                          rightRange.reduce((sum, digit) => sum + digit, 0);
  
      if (digits[i] === 1 && visionValue < minVisionValue) {
        minVisionValue = visionValue;
      }
    }
  
    return minVisionValue === Infinity ? false : true;
  }

  console.log(range_vision(34315));