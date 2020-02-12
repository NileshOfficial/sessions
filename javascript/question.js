function calculate() {
    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");
    let time = document.getElementById("time");
    let interest = document.getElementById("interest");

    interest.innerHTML = `Interest: ${(principal.value * rate.value * time.value) / 100}`;
}

function checkPalindrome() {
    let string = document.getElementById("palindromeString").value;
    let res = document.getElementById("palindromeResult")

    let i = 0;
    let j = string.length - 1;

    while (i <= j) {
        if (string[i] !== string[j]) {
            res.innerHTML = `It is not a palindrome`;
            return;
        }
        i += 1; j -= 1;
    }
    res.innerHTML = `It is a palindrome`;
}

function areaCircle() {
    let r = document.getElementById("radius").value;
    let area = document.getElementById("area");
    area.innerHTML = 3.14 * r * r;
}

function objectCopy() {
    let instruction = document.getElementById('instruction');
    let originalObject = {
        a: 1,
        b: {
            c: 2,
            d: 3
        }
    };

    let copy = {
        ... originalObject
    }
    console.log('Original object');
    console.log(originalObject);
    console.log('Copied object'); 
    console.log(copy);
    instruction.innerHTML = 'Please check console.'
}

let employeeDetails = [
    {
        name: "A",
        age: 25,
        salary: 10000,
        dob: "1999-09-02"
    },
    {
        name: "B",
        age: 25,
        salary: 999,
        dob: "1999-09-02"
    },
    {
        name: "C",
        age: 20,
        salary: 6000,
        dob: "1999-09-02"
    },
    {
        name: "D",
        age: 20,
        salary: 800,
        dob: "1999-09-02"
    },
    {
        name: "E",
        age: 24,
        salary: 4000,
        dob: "1999-09-02"
    },
    {
        name: "F",
        age: 34,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "G",
        age: 34,
        salary: 600,
        dob: "1999-09-02"
    },
    {
        name: "H",
        age: 34,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "I",
        age: 55,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "J",
        age: 24,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "K",
        age: 55,
        salary: 700,
        dob: "1999-09-02"
    },
    {
        name: "L",
        age: 55,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "M",
        age: 34,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "N",
        age: 34,
        salary: 200,
        dob: "1999-09-02"
    },
    {
        name: "O",
        age: 55,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "P",
        age: 34,
        salary: 900,
        dob: "1999-09-02"
    },
    {
        name: "Q",
        age: 34,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "R",
        age: 18,
        salary: 8000,
        dob: "1999-09-02"
    },
    {
        name: "S",
        age: 19,
        salary: 500,
        dob: "1999-09-02"
    }
];

function employeeQuestion() {
    document.getElementById("jsonData").innerHTML = "Employees data:\n" + JSON.stringify(employeeDetails, null, 4);
    getSalaryGt5k();
    groupByAge();
    incEmpSalary();
}

function getSalaryGt5k() {
    let empQ1 = document.getElementById("empQ1");
    let filterEmp = employeeDetails.filter(emp => emp.salary > 5000 && emp);
    console.log(filterEmp);
    empQ1.innerHTML = JSON.stringify(filterEmp, null, 4);
}

function groupByAge() {
    let empQ2 = document.getElementById("empQ2");
    let groupedData = {};

    employeeDetails.forEach(emp => {
        if(groupedData[emp.age] === undefined)
            groupedData[emp.age] = [emp];
        else groupedData[emp.age].push(emp);
    });

    empQ2.innerHTML = JSON.stringify(groupedData, null, 4);
}

function incEmpSalary() {
    let empQ3 = document.getElementById("empQ3");
    let empIdx = [];
    employeeDetails.forEach((emp, idx) => {
        if(emp.salary < 1000 && emp.age > 20)
            empIdx.push(idx);
    });

    empQ3.innerHTML = '';

    empIdx.forEach(idx => {
        employeeDetails[idx].salary *= 5;
        empQ3.innerHTML += JSON.stringify(employeeDetails[idx], null, 4);
    });
}