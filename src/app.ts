// //  interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "Zhe Kai",
//   age: 22,
//   speak(test: string): void {
//     console.log("says ", test);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };

// const greetPerson = (person: IsPerson) => {
//   console.log("hello ", person.name,person.spend(30), person.speak("bonjour"));
// };

// greetPerson(me);

// console.log(me);

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("mario", "web work", 355);
// docTwo = new Payment("Zhe Kai", "build app", 1500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("mario", "work on project", 255);
// const invTwo = new Invoice("zhekai", "work on zk project", 500);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
    // (...values) is equivalent to (values[0], values[1], values[2]) - Spread syntax(...)
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "start");
});

// ++++++++++
// +GENERICS+
// ++++++++++
/* specifies the pass in object by using `extends` */
console.log("GENERICS EXAMPLE");
// const addUID = <T extends { name: string; age: number; occupation: string }>(
//   obj: T
// ) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "zhekai", age: 22, occupation: "developer" });
// console.log(docOne.occupation);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

interface Resources<T> {
  uid: number;
  resourceType: number;
  data: T;
}

// ENUMS (numeric enums) - define named constant
// helps to convert specified string into number when passing into object
// so that it is easier to document the intent (without having to remember the number)
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

const docThree: Resources<object> = {
  uid: 1,
  resourceType: ResourceType.FILM,
  data: { title: "The Sound of the Wind" },
};

const docFive: Resources<object> = {
  uid: 5,
  resourceType: ResourceType.PERSON,
  data: { name: "zhekai" },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "toDoList",
  data: [
    "workout",
    "get plenty of rest",
    "upskill myself",
    "learn something new and useful",
    "build a project",
    "get a job",
  ],
};

console.log(docThree, docFour, docFive);

// ++++++++
// +tuples+
// ++++++++
// data types are fixed for each index in the pre-defined array

let arr = ["Ryu", 24, true];
arr[0] = false;
arr[1] = "zhekai";
arr = ["nox", 44, false];
console.log(arr);

let tup: [string, number, boolean] = ["Rin", 24, true];
tup[0] = "james";
// console.log(tup);

let student: [string, number];
student = ["hatsune-miku", 393339];
