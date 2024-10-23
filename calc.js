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
    //   Setting the table body
    var tableBody = document.getElementById("tableBody");
    //   Adds inputs into the table
    tableBody.innerHTML += " \n    <tr>\n    <td>".concat(getFirstNameInput.value, "</td>\n    <td>").concat(getLastNameInput.value, "</td>\n    <td>").concat(getIdInput.value, "</td>\n    <td>").concat(getTitleInput.value, "</td>\n    <td>$").concat(getSalaryInput.value, "</td>\n    <td><button onclick='deleteButton(event)'>delete</button></td>\n  </tr>\n  ");
    //   calc the monthly cap
    monthlyCap += Number(getSalaryInput.value) / 12;
    //   Clears inputs after submittion
    getFirstNameInput.value = '';
    getLastNameInput.value = '';
    getIdInput.value = '';
    getTitleInput.value = '';
    getSalaryInput.value = '';
    //   Changes the monthly cap on screen
    var monthlyCapPTag = document.getElementById("over-budgetHeader");
    monthlyCapPTag.textContent = 'Total Monthly: $' + monthlyCap;
    //   Conditionally turns monthly cap p tag red
    if (monthlyCap > 20000) {
        console.log("we spent way to much money", monthlyCap);
        monthlyCapPTag.style.color = "red";
    }
}
