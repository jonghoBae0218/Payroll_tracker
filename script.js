// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  
  //Array to return employee data
  const employees = [];

  // Prompt user to enter employee data
  while (true) {
    const firstName = prompt("Enter employee's first name:");

    const lastName = prompt("Enter employee's last name:");

    let salary = prompt(("Enter employee's salary:"));
   
    //If salary is not num
    if (isNaN(salary)) {
      salary = 0.00;
    }else{
      //if it is num, change the string to float
      salary = parseFloat(salary);
    }
  

    // Create employee object and add to array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    //Ask user to continue
    if(!confirm("Continue ?")){
      break;
    }

  }

  //Return the array
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
 
  
  let sum=0;
  //Add all the salary
  for(let i=0; i< employeesArray.length; i++){
    sum+=employeesArray[i].salary;
  }

  //divide it by employee number and round to two decimals
  console.log("average salary is: $" +(sum/employeesArray.length).toFixed(2));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  //create index value generating random num from 0 to employee num -1.
  const index = Math.floor(Math.random() * employeesArray.length);
  //Log that employees name.
  console.log("The random winner is:" + employeesArray[index].firstName +" " + employeesArray[index].lastName);



}

/*
  ====================
  STARTER CODE 
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
