function importStudent(e) {
  e.preventDefault();

  var name = document.getElementById("nameInput").value;
  var index = document.getElementById("indexInput").value;
  var phone = document.getElementById("phoneInput").value;
  var session = document.getElementById("sessionInput").value;
  var gradeRadios = document.getElementsByName("gradeRadioOptions");

  var radioValue;
  for (var i = 0; i < gradeRadios.length; i++) {
    if (gradeRadios[i].checked) {
      radioValue = gradeRadios[i].value;
    }
  }

  addElementToTable(name, index, phone, session, radioValue);
  addAverageGrade();
}

function addAverageGrade() {
  var studentGrades = document.getElementsByName("studentGrade");
  var studentsAverageGradeDiv = document.getElementById("studentsGradeAverage");
  var studentsCounter = studentGrades.length;
  var studentsGradeSum = 0;

  for (var i = 0; i < studentGrades.length; i++) {
     studentsGradeSum += parseInt(studentGrades[i].innerHTML);
  }

  if (studentsCounter == 0) {
    studentsAverageGradeDiv.innerHTML = `Students (average grade: 0)`;
  } else {
    studentsAverageGradeDiv.innerHTML = `Students (average grade: ${(studentsGradeSum / studentsCounter).toFixed(2)})`;
  }
}

function addElementToTable(name, index, phone, session, radio) {
  var tableBody = document.getElementById("studentsTableBody");

  var htmlRow = `
  <tr>
    <td>${name}</td>
    <td>${index}</td>
    <td>${phone}</td>
    <td name="studentGrade">${radio}</td>
    <td>${session}</td>
    <td>
      <button class="btn btn-primary" onclick=confirmRow(this)>Confirm</button>
      <button class="btn btn-danger" onclick=removeRow(this)>Revert</button>
    </td>
  </tr>`;

  tableBody.innerHTML += htmlRow;
}

function confirmRow(e) {
  var rowToConfirm = e.parentNode.parentNode;
  var buttons = rowToConfirm.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  rowToConfirm.style.backgroundColor = "green";
}

function removeRow(e) {
  var rowToRemove = e.parentNode.parentNode;
  var index = rowToRemove.getElementsByTagName("td")[1].innerHTML;
  var grade = rowToRemove.getElementsByTagName("td")[3].innerHTML;
  rowToRemove.innerHTML = "";
  document.getElementById("revertedHostoryStudents").innerHTML += `<li>${index} - grade ${grade}</li>`;
  addAverageGrade();
}