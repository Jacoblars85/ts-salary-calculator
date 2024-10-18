console.log("hello world");

let monthlyCap = 0;

function deleteButton(event) {
  console.log("trying to delete");

  event.target.parentElement.parentElement.remove();
}

function submitButton(event) {
  console.log("trying to button");

  event.preventDefault();

//   Gets inputs
  let getFirstNameInput = document.getElementById("firstNameInput") as HTMLInputElement;
  let getLastNameInput = document.getElementById("lastNameInput") as HTMLInputElement;
  let getIdInput = document.getElementById("idInput") as HTMLInputElement;
  let getTitleInput = document.getElementById("titleInput") as HTMLInputElement;
  let getSalaryInput = document.getElementById("annualSalaryInput") as HTMLInputElement;

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
//   monthlyCap += getSalaryInput / 12;

//   Changes the monthly cap on screen
  // document.getElementById('over-budget').innerHTML = 'Total Monthly: $' + monthlyCap;

//   Conditionally turns monthly cap p tag red
//   if (monthlyCap > 20000) {
//     console.log("we spent way to much money", monthlyCap);
//     // document.getElementById('over-budget').style.color = "red";
//   }
}