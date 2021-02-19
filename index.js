const mood = "😁";
const date = "2021.02.17";
const want = "sleep";
const what = "595959";
console.log(mood);

const eyesight = 1.2;

const balance = 20000;

const coffee = false;

console.log(eyesight);
console.log(balance);
console.log(coffee);

const a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

alert("Im Working. Im JSON. Im Beautiful and Worth it.");
console.log("Im Working. Im JSON. Im Beautiful and Worth it.");

const monday = "Mom";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek);

console.log(daysOfWeek[2]);
console.log(daysOfWeek[4]);

const chaekieInfo = ["chaekie", "26", true, "seoul"];

console.log(chaekieInfo[0]);

const chaekieInfo = {
  name: "Chaekie",
  age: 26,
  gender: "Female",
  isHandsome: true,
  favMovies: ["Toystory", "Up", "Finding Nemo"],
  favFood: [
    { name: "Ssam", fatty: false },
    { name: "Buldak", fatty: true },
  ],
};

console.log(console);

function numbering() {
  var i = 0;
  while (i < 10) {
    document.write(i);
    i += 1;
  }
}
for (var i = 0; i < 5; i++) {
  numbering();
}

console.log(chaekieInfo.favFood[0].fatty);

function doSomething() {
  console.log("hello");
}

doSomething();

function sayHello() {
  console.log("Hello!");
}

sayHello("Chaekie");

function sayHello(potato, book) {
  console.log("Hello!", potato, "you have", book);
}

sayHello("Chaekie", "20000");

function goToCafe(who, where, what) {
  console.log(who, "went to", where, "to get some", what);
}

goToCafe("Chaekie", "Praha", "silkLatte");
