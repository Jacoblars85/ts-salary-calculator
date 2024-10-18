console.log("hello world");

let monthlyCap : number = 0;

function deleteButton(event : any) {
  console.log("trying to delete");
}

function submitButton(event : any) {
  console.log("trying to button");

//   Gets inputs
  let getFirstNameInput : any = document.getElementById("firstNameInput");
  let getLastNameInput : any = document.getElementById("lastNameInput");
  let getIdInput : any = document.getElementById("idInput");
  let getTitleInput : any = document.getElementById("titleInput");
  let getSalaryInput : any = document.getElementById("annualSalaryInput");

//   Clears input
//   document.getElementById('firstNameInput').value = '';
//   document.getElementById('lastNameInput').value = '';
//   document.getElementById('idInput').value = '';
//   document.getElementById('titleInput').value = '';
//   document.getElementById('annualSalaryInput').value = '';

  console.log("getFirstNameInput", getFirstNameInput);

//   Setting the table body
  let tableBody : any = document.getElementById("tableBody");

//   Adds inputs into the table
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

//   calc the monthly cap
  monthlyCap += getSalaryInput / 12;

//   Changes the monthly cap on screen
  // document.getElementById('over-budget').innerHTML = 'Total Monthly: $' + monthlyCap;

//   Conditionally turns monthly cap p tag red
  if (monthlyCap > 20000) {
    console.log("we spent way to much money", monthlyCap);
    // document.getElementById('over-budget').style.color = "red";
  }
}