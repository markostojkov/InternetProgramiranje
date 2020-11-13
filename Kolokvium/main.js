function encrypt() {
  var numbersAsString = document.getElementById("textInput").value;
  var newNumbersAsString = "";

  const listOfSeparateNumbers = numbersAsString.split('/');

  listOfSeparateNumbers.forEach((element, i) => {
    newNumbersAsString += element.split('').reverse().join('');

    if (listOfSeparateNumbers.length - 1 != i) {
      newNumbersAsString += '/';
    }
  });

  document.getElementById("textInput").value = newNumbersAsString;
}

function check() {
  var numbersAsString = document.getElementById("textInput").value;

  const moreThanThreeZeros = numbersAsString.split('0');

  if (moreThanThreeZeros.length > 3) {
    document.getElementById("displayInputValid").innerHTML = 'Valid';
  } else {
    document.getElementById("displayInputValid").innerHTML = 'Not valid';
  }
}