const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Bent, Silas",
  "Belloc, Hilaire",
  "Berlin, Irving",
  "Beck, Glenn",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Benjamin, Walter",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benn, Tony",
  "Biondo, Frank",
  "Bennington, Chester",
  "Billings, Josh",
  "Benson, Leana",
  "Berry, Halle",
  "Bentsen, Lloyd",
  "Becker, Carl",
  "Berle, Milton",
  "Berger, Ric",
  "Berio, Luciano",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bethea, Erin",
  "Blair, Robert",
  "Bevan, Aneurin",
  "Biden, Joseph",
  "Blair, Tony",
  "Bierce, Ambrose",
  "Bergman, Ingmar",
  "Biko, Steve",
  "Birrell, Augustine",
  "Bevel, Ken",
  "Blake, William",
  "Black, Elk"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; //meaning we keep it
  }
});
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(name => `${name.first} ${name.last}`);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ageSort = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
// console.table(ageSort);

//OR!!!!!!!

const orderedAges = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(orderedAges);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const finalAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(finalAge);

// 5. Sort the inventors by years lived

//added for me for logic
// const totalAge = inventors.map(age => {
//   return `${age.passed - age.year} ${age.last}`;
// });
// console.log(totalAge);
// const sortedAges = totalAge.sort();
// console.log(sortedAges);

const oldest = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//MUST BE DONE ON THAT LINK
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];

// const de = links.map(link => link.textContent).filter(streetName => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedNames = people.sort((last, next) => {
  const [aLast, aFirst] = last.split(", "); //We dont use the first names, just there for the sort method
  const [bLast, bFirst] = next.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(sortedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const instances = data.reduce((total, vehicle) => {
  //start with empty object at bottom, check if there is anything there, if not (!total[vehicle]) then start at 0 and loop through, incremementing by one each time
  if (!total[vehicle]) {
    total[vehicle] = 0;
  }
  total[vehicle]++;
  return total;
  //the empty object we start with, can be hardcoded and omit the if statement if we know what's contained inside for certain.
}, {});
console.log(instances);
