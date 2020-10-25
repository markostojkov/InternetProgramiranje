class Palindrome {
  number;

  constructor(number) {
    if (this.checkIfTheNumberIsThreeDigit(number)) {
      this.number = number;
      this.checkIfNumberIsPalindrome() ? alert('Brojot e palindrom') : alert('Brojot ne e palindrom');
    } else {
      alert('Ne moze da se proveri vneseniot broj');
    }
  };

  checkIfTheNumberIsThreeDigit(number) {
    return number.toString().length == 3;
  }

  checkIfNumberIsPalindrome() {
    let numberForCheck = 0;
    let firstNumber = parseInt(this.number);

    while(firstNumber > 0) {
      numberForCheck = (numberForCheck * 10) + firstNumber % 10;
      firstNumber = Math.floor(firstNumber / 10);
    }
    return numberForCheck == this.number;
  }
}

var number = prompt('Vnesete tricifren broj');
new Palindrome(number);