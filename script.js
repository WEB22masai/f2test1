let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  const averageSalary = arr.reduce((total, person) => total + person.salary, 0) / arr.length;
  const highEarningDevelopers = arr.filter(person => person.profession === 'developer' && person.salary > averageSalary);
  console.log(highEarningDevelopers);
}

PrintHighEarningDevelopers() ;
// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function recursiveAddData() {
  const newData = {};
newData.id = arr.length + 1;
newData.name = prompt('Enter name:');
newData.age = parseInt(prompt('Enter age:'));
newData.profession = prompt('Enter profession:');
newData.salary = parseInt(prompt('Enter salary:'));
arr.push(newData);

const userResponse = prompt('Add another person? (yes/no)');
if (userResponse.toLowerCase() === 'yes') {
  recursiveAddData();
}
  //Write your code here, just console.log
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
  //Write your code here, just console.log
  const sortedArray = [...arr].sort((a, b) => a.age - b.age);
const youngest = sortedArray[0];
const oldest = sortedArray[sortedArray.length - 1];
const updatedArray = arr.filter(person => person !== youngest && person !== oldest);
console.log(updatedArray);
}
removeYoungestAndOldest();


// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function mergeAndFilterProfessions() {
  //Write your code here, just console.log
  const dummyArray = [
    { id: 4, name: 'emma', age: 22, profession: 'designer', salary: 1200 },
    { id: 5, name: 'oliver', age: 25, profession: 'developer', salary: 1300 },
  ];

  const mergedArray = [...arr, ...dummyArray];
  const uniqueProfessions = Array.from(new Set(mergedArray.map(person => person.profession)));
  console.log(uniqueProfessions);
}
mergeAndFilterProfessions();

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
  //Write your code here, just console.log
  const maxSalaryPerson = arr.reduce((max, person) => (person.salary > max.salary ? person : max));
  maxSalaryPerson.salary -= maxSalaryPerson.salary * 0.1;
  console.log(arr);
}
applyTax();

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
  //Write your code here, just console.log
  const isAllDevelopers = arr.every(person => person.profession === 'developer');
  console.log(isAllDevelopers);
}
isEveryoneDeveloper();

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
  //Write your code here, just console.log
  if (arr.length < 2) {
    console.log("Not enough persons to swap.");
    return;
  }
  const firstProfession = arr[0].profession;
  arr[0].profession = arr[arr.length - 1].profession;
  arr[arr.length - 1].profession = firstProfession;
  console.log(arr);
}
swapProfessions();

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
  //Write your code here, just console.log
  const updatedArray = arr.map(person => ({ ...person, experience: 1 }));
  console.log(updatedArray);
}
addExperienceProperty();

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
  //Write your code here, just console.log
  const grouped = {};
  for (const person of arr) {
    if (grouped[person.profession]) {
      grouped[person.profession]++;
    } else {
      grouped[person.profession] = 1;
    }
  }
  console.log(grouped);
}
groupByProfession();

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
  //Write your code here, just console.log
  const longestNamePerson = arr.reduce((longest, person) =>
  person.name.length > longest.name.length ? person : longest
);
longestNamePerson.profession = longestNamePerson.profession.toUpperCase();
console.log(arr);
}
capitalizeLongestNamedPersonProfession();

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
}
shuffleArray();

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
  const copyArr = [...arr];
  const rotationIndex = arr.length - (n % arr.length);
  const rotatedArray = [...copyArr.slice(rotationIndex), ...copyArr.slice(0, rotationIndex)];
  console.log(rotatedArray);
}
rotateArray(2); 

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
  const closestPerson = arr.reduce((closest, person) =>
  Math.abs(person.age - age) < Math.abs(closest.age - age) ? person : closest
);
console.log(closestPerson);
}
findClosestAge(22);

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
  const names = new Set();
  for (const person of arr) {
    if (names.has(person.name)) {
      console.log("There are repeated names in the array.");
      return;
    }
    names.add(person.name);
  }
  console.log("There are no repeated names in the array.");
}
hasRepeatedNames();