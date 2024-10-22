console.log("hello world");
var monthlyCap = 0;
function deleteButton(event) {
    console.log("trying to delete");
    event.target.parentElement.parentElement.remove();
}
function submitButton(event) {
    console.log("trying to button");
    event.preventDefault();
    //   Gets inputs
    var getFirstNameInput = document.getElementById("firstNameInput");
    var getLastNameInput = document.getElementById("lastNameInput");
    var getIdInput = document.getElementById("idInput");
    var getTitleInput = document.getElementById("titleInput");
    var getSalaryInput = document.getElementById("annualSalaryInput");
    console.log("getFirstNameInput", getFirstNameInput);
    //   Setting the table body
    var tableBody = document.getElementById("tableBody");
    //   Adds inputs into the table
    tableBody.innerHTML += " \n    <tr>\n    <td>".concat(getFirstNameInput, "</td>\n    <td>").concat(getLastNameInput, "</td>\n    <td>").concat(getIdInput, "</td>\n    <td>").concat(getTitleInput, "</td>\n    <td>$").concat(getSalaryInput, "</td>\n    <td><button onclick='deleteButton(event)'>delete</button></td>\n  </tr>\n  ");
    //   calc the monthly cap
    //   monthlyCap += getSalaryInput / 12;
    //   Changes the monthly cap on screen
    // document.getElementById('over-budget').innerHTML = 'Total Monthly: $' + monthlyCap;
    //   Conditionally turns monthly cap p tag red
    //   if (monthlyCap > 20000) {
    //     console.log("we spent way to much money", monthlyCap);
    //     // document.getElementById('over-budget').style.color = "red";
    //   }
}
