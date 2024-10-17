console.log('hello world');

let monthlyCap = 0;

function deleteButton() {
    console.log('trying to delete');
    
}

function submitButton() {
    console.log('trying to button');
    
    let getFirstNameInput = document.getElementById('firstNameInput');
    let getLastNameInput = document.getElementById('lastNameInput');
    let getIdInput = document.getElementById('idInput');
    let getTitleInput = document.getElementById('titleInput');
    let getSalaryInput : any = document.getElementById('annualSalaryInput');

    console.log('getFirstNameInput', getFirstNameInput);
    

//     let tableBody : HTMLElement = document.getElementById('tableBody');

//     tableBody.innerHTML +=
//     ` 
//     <tr>
//     <td>${getFirstNameInput}</td>
//     <td>${getLastNameInput}</td>
//     <td>${getIdInput}</td>
//     <td>${getTitleInput}</td>
//     <td>$${getSalaryInput}</td>
//     <td><button onclick='deleteButton(event)'>delete</button></td>
//   </tr>
//   `

monthlyCap += getSalaryInput / 12;
}