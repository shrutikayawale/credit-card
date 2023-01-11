const addDigits =  value => {
  return value.toString().split('').map(Number).reduce(function (a, b) { return a + b }, 0);
};
   
/** isValidLuhn is used to validate if credit card number is valid or not using Luhn algorith */

const isValidLuhn = cardNum => {
  const cardNumArray = cardNum.split('');
  let isSecond = false;
  let sum = 0;
   
  for (let i = cardNumArray.length - 1; i >= 0; i--) {
    if (isSecond) {
      let double = cardNumArray[i] * 2;
      let newDigit = double > 9 ? addDigits(double) : double;
      sum = sum + parseInt(newDigit);
    } else {
      sum = sum + parseInt(cardNumArray[i]);
    }      

    isSecond = !isSecond;
  };
  
  return sum % 10 === 0;
};

module.exports = { isValidLuhn };