class ProizvodOdNiza{
  array;

  constructor(string) {
    this.array = JSON.parse("[" + string + "]");

    this.printProizvod();
  }

  printProizvod() {
    let numberOfNegatives = 0;

    this.array.forEach(x => {
      if (x < 0) {
        numberOfNegatives++;
      }
    });

    console.log(numberOfNegatives, this.array);
    let znak;
    numberOfNegatives % 2 == 0 ? znak = '+' : znak = '-';

    alert(`Znakot e ${znak}`);
  }
}

var niza = prompt('Vnesete niza');
new ProizvodOdNiza(niza);