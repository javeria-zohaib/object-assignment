// Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if
// any).
type Employee={
    name:string,
    department:string,
    role:"Manager"|"Engineer"|"Intern"
    contact?:any,
    skill?:string,

};
let employee:Employee={
    name:"Javeria Rehman",
    department:"IT",
    role:"Intern",
    contact:{
        phoneno:3452789,
        emailid:"javeriarehman@gmail.com"

    },
    skill:"Typescript",
}
let employee1:Employee={
    name:"Ammara Rehman",
    department:"HR",
    role:"Manager",
    contact:{
        phoneno:1234567,
        emailid:"rehman2345@gmail.com"

    },
    
}
console.log(employee,employee1);
// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named get Horsepower directly within the Car type alias to retrieve the
// engine's horsepower.

type Car=
 { 
    name:string,
    color:string,
    model:number,
    powerstearing:boolean,
    engine:{
        horsepower:number,
    }
    getHorsepower:()=>number,


 }
 let car:Car={
    name:"yaris",
    color:"black",
    model:2023,
    powerstearing:true,
    engine:{
        horsepower:1000
    },
    getHorsepower:()=>{
        return  car.engine.horsepower;
    }
 }
 console.log(car,car.getHorsepower());