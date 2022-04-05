const student1 = { firstName: "Masha", lastName: "Gilberg", gpa: 4.0, vllyBll: "true" };
const student2 = { firstName: "Bob", lastName: "Joe", gpa: 2.1, vllyBll: "false" };

const students = [];

students.push(student1, student2);

console.log(students);

// if (student2.vllyBll == "false") {
//     console.log(`${student2.firstName} doesn't play volleyball`);
// } else {
//     console.log(`${student2.lastName} does play volleyball`);
// }
students.push({ firstName: "Katie", lastName: "Gilberg", gpa: 3.7, vllyBll: "true" });
console.log("I know " + students[2].firstName + "!");