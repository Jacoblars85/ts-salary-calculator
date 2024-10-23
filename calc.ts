console.log("hello world");

let monthlyCap: number = 0;

function deleteButton(event) {
  console.log("trying to delete");

  event.target.parentElement.parentElement.remove();
}

function submitButton(event) {
  console.log("trying to button");

  event.preventDefault();

//   Gets inputs
  let getFirstNameInput: any = document.getElementById("firstNameInput") as HTMLInputElement;
  let getLastNameInput: any = document.getElementById("lastNameInput") as HTMLInputElement;
  let getIdInput: any = document.getElementById("idInput") as HTMLInputElement;
  let getTitleInput: any = document.getElementById("titleInput") as HTMLInputElement;
  let getSalaryInput: any = document.getElementById("annualSalaryInput") as HTMLInputElement;

  console.log("getFirstNameInput", getFirstNameInput.value);

//   Setting the table body
  let tableBody: any = document.getElementById("tableBody");

//   Adds inputs into the table
  tableBody.innerHTML += ` 
    <tr>
    <td>${getFirstNameInput.value}</td>
    <td>${getLastNameInput.value}</td>
    <td>${getIdInput.value}</td>
    <td>${getTitleInput.value}</td>
    <td>$${getSalaryInput.value}</td>
    <td><button onclick='deleteButton(event)'>delete</button></td>
  </tr>
  `;

  //   calc the monthly cap
    monthlyCap += Number(getSalaryInput.value) / 12;

//   Clears inputs after submittion
  getFirstNameInput.value = '';
  getLastNameInput.value = '';
  getIdInput.value = '';
  getTitleInput.value = '';
  getSalaryInput.value = '';
  
//   Changes the monthly cap on screen
let monthlyCapPTag: any = document.getElementById("over-budgetHeader") as HTMLParagraphElement;

monthlyCapPTag.textContent = 'Total Monthly: $' + monthlyCap;

//   Conditionally turns monthly cap p tag red
  if (monthlyCap > 20000) {
    console.log("we spent way to much money", monthlyCap);
    // document.getElementById('over-budget').style.color = "red";
  }
}