class NajgolemZborVoString{
  string;

  constructor(string) {
    this.string = string;

    this.printBiggestWordInString();
  }

  printBiggestWordInString() {
    let biggestWord = '';
    const listOfWords = this.string.split(' ');

    listOfWords.forEach(x => {
      if (x.length > biggestWord.length) {
        biggestWord = x;
      }
    });

    alert(biggestWord);
  }
}

var string = prompt('Vnesete string');
new NajgolemZborVoString(string);