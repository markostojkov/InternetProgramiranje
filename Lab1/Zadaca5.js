class PecatiBroeviPoParnost{

  constructor() {
    this.pecatiBroeviPoParnost();
  }

  pecatiBroeviPoParnost() {
    for (let i = 1; i <= 30; i++) {

      if (i % 2 == 0) {
        document.write(`${i} e paren broj <br>`);
      } else {
        document.write(`${i} e neparen broj <br>`);
      }
    }
  }
}

new PecatiBroeviPoParnost();