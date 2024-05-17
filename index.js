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
let tshirt = {
    name: "colorful tshirts",
    price: 200,
    color: "red",
    inventory: {
        stock: 3000,
        coloroption: ["red", "blue", "yellow", "white"],
        changecolor: (newcolor) => {
            if (tshirt.inventory.coloroption.includes(newcolor)) {
                if (newcolor === "blue") {
                    console.log("increase price by 20% for blue");
                }
                else if (newcolor === "white") {
                    console.log("decrease price by 10% for white");
                    tshirt.color = newcolor;
                }
                else {
                    console.log("This colour is not available in color options");
                }
            }
        }
    }
};
console.log(tshirt);
tshirt.inventory.changecolor("blue");
