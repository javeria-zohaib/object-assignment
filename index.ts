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
//  Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue).
type Product={
    name:string,
    price:number,
    color:string,
    inventory:{
        stock:number,
        coloroption:string[],
        changecolor:(newcolor:string)=> any,
    }
}
let tshirt:Product={
    name:"colorful tshirts",
    price:200,
    color:"red",
    inventory:{
        stock:3000,
        coloroption:["red","blue" ,"yellow","white"],
        changecolor:(newcolor:string)=>{
            if(tshirt.inventory.coloroption.includes(newcolor)){
                if (newcolor === "blue"){
                    console.log("increase price by 20% for blue");
                }
                else if(newcolor=== "white"){console.log("decrease price by 10% for white")
                tshirt.color=newcolor;}

                else{console.log("This colour is not available in color options")}
                
    


            }
        }}
    }
    console.log(tshirt);
tshirt.inventory.changecolor("blue");
