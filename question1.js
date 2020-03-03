/* Q1. Create a hierarchy of person, employee and developers.  */

function person(name, age) {
    this.name = name;
    this.age = age;
}

function employee(employeeId, name, age) {
    person.call(this,  name, age);
    this.empId = employeeId;
}

function developer(competency, employeeId, name, age) {
    employee.call(this, employeeId, name, age)
    this.competency = competency;
}

let dev = new developer("Feen", 4076, "Nilesh", 21);
console.log(dev);