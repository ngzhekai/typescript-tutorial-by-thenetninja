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
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
        // (...values) is equivalent to (values[0], values[1], values[2]) - Spread syntax(...)
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
});
// ++++++++++
// +GENERICS+
// ++++++++++
/* specifies the pass in object by using `extends` */
console.log("GENERICS EXAMPLE");
// ENUMS (numeric enums) - define named constant
// helps to convert specified string into number when passing into object
// so that it is easier to document the intent (without having to remember the number)
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: { title: "The Sound of the Wind" },
};
const docFive = {
    uid: 5,
    resourceType: ResourceType.PERSON,
    data: { name: "zhekai" },
};
const docFour = {
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
let tup = ["Rin", 24, true];
tup[0] = "james";
// console.log(tup);
let student;
student = ["hatsune-miku", 393339];
