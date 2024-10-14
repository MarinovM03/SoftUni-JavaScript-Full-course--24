function specialNumbers(num) {

  for (let i = 1; i <= num; i++) {
    let firstDigitStr = String(i)[0];
    let firstDigitNum = Number(firstDigitStr);
    let lastDigit = i % 10;
    if (i < 10) {
      if (firstDigitNum === 5 || firstDigitNum === 7) {
        console.log(`${firstDigitNum} -> True`);
      } else {
        console.log(`${firstDigitNum} -> False`);
      }
      } else {
      if (firstDigitNum + lastDigit === 5 || firstDigitNum + lastDigit === 7 || firstDigitNum + lastDigit === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }
  }   
}

// specialNumbers(15);
specialNumbers(20);
