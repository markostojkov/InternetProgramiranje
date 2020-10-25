class TelefonskiBroj {
  number;

  constructor(number) {
    this.number = number;

    this.printNumberInFormat();
  }

  printNumberInFormat() {
    const firstPart = this.number.substring(0, 3);
    const secondPart = this.number.substring(3, 6);
    const thirdPart = this.number.substring(6, 9);

    alert(`${firstPart}/${secondPart}-${thirdPart} ${this.getNumberOperator(firstPart)}`)
  }

  getNumberOperator(numberOperator) {
    switch(numberOperator) {
      case '070':
      case '071':
      case '072':
        return 'T-mobile';
      case '075':
      case '076':
        return 'One';
      case '077':
      case '078':
        return 'Vip';
      default:
        return 'None';
    }
  }
}


var number = prompt('Vnesete telefonski broj');
new TelefonskiBroj(number);