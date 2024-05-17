"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    name: "Javeria Rehman",
    department: "IT",
    role: "Intern",
    contact: {
        phoneno: 3452789,
        emailid: "javeriarehman@gmail.com"
    },
    skill: "Typescript",
};
let employee1 = {
    name: "Ammara Rehman",
    department: "HR",
    role: "Manager",
    contact: {
        phoneno: 1234567,
        emailid: "rehman2345@gmail.com"
    },
};
console.log(employee, employee1);
let car = {
    name: "yaris",
    color: "black",
    model: 2023,
    powerstearing: true,
    engine: {
        horsepower: 1000
    },
    getHorsepower: () => {
        return car.engine.horsepower;
    }
};
console.log(car, car.getHorsepower());
