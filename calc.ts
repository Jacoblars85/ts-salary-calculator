console.log("hello world");

let monthlyCap: number = 0;

function deleteButton() {
  console.log("trying to delete");
}

function submitButton() {
  console.log("trying to button");

  let getFirstNameInput: any = document.getElementById("firstNameInput");
  let getLastNameInput: any = document.getElementById("lastNameInput");
  let getIdInput: any = document.getElementById("idInput");
  let getTitleInput: any = document.getElementById("titleInput");
  let getSalaryInput: any = document.getElementById("annualSalaryInput");

  console.log("getFirstNameInput", getFirstNameInput);

  let tableBody: any = document.getElementById("tableBody");

  tableBody.innerHTML += ` 
    <tr>
    <td>${getFirstNameInput}</td>
    <td>${getLastNameInput}</td>
    <td>${getIdInput}</td>
    <td>${getTitleInput}</td>
    <td>$${getSalaryInput}</td>
    <td><button onclick='deleteButton(event)'>delete</button></td>
  </tr>
  `;

  monthlyCap += getSalaryInput / 12;

  // document.getElementById('over-budget').innerHTML = 'Total Monthly: $' + monthlyCap;

  if (monthlyCap > 20000) {
    console.log("we spent way to much money", monthlyCap);
    // document.getElementById('over-budget').style.color = "red";
  }
}

// delete the tests folder and file
