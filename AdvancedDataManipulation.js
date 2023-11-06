// File Name: AdvancedDataManipulation.js

/*

This code demonstrates advanced data manipulation techniques using JavaScript.
It includes functions for sorting, filtering, and transforming data to provide useful insights.

*/

// Sample data

const employees = [
  { id: 1, firstName: "John", lastName: "Doe", age: 32, salary: 5000 },
  { id: 2, firstName: "Alice", lastName: "Smith", age: 28, salary: 6000 },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 45, salary: 4500 },
  { id: 4, firstName: "Emma", lastName: "Davis", age: 35, salary: 5500 },
  { id: 5, firstName: "Michael", lastName: "Wilson", age: 40, salary: 7000 },
];

// Sorting functions

const sortByLastName = (a, b) => {
  if (a.lastName < b.lastName) return -1;
  if (a.lastName > b.lastName) return 1;
  return 0;
};

const sortBySalary = (a, b) => b.salary - a.salary;

// Filtering functions

const filterByAge = (employees, minAge, maxAge) =>
  employees.filter(({ age }) => age >= minAge && age <= maxAge);

// Data transformation functions

const calculateAverageSalary = (employees) => {
  const totalSalary = employees.reduce((sum, { salary }) => sum + salary, 0);
  return totalSalary / employees.length;
};

const groupByAgeRange = (employees, rangeSize) => {
  const groups = {};

  employees.forEach((employee) => {
    const ageRange = Math.floor(employee.age / rangeSize) * rangeSize;
    if (!groups[ageRange]) groups[ageRange] = [];
    groups[ageRange].push(employee);
  });

  return groups;
};

// Usage

console.log("Sorted by last name:");
console.log(employees.sort(sortByLastName));

console.log("\nSorted by salary:");
console.log(employees.sort(sortBySalary));

console.log("\nFiltered by age (30-40):");
console.log(filterByAge(employees, 30, 40));

console.log("\nAverage salary:");
console.log(calculateAverageSalary(employees));

console.log("\nGrouped by age range (10 years):");
console.log(groupByAgeRange(employees, 10));

// ... More sophisticated and elaborate code can be added here ...

// End of code