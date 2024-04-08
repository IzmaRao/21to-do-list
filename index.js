#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
let condition2 = true;
while (condition) {
    let optio = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.bold.cyan("Select what you want?"),
            choices: ["Add", "Delete"],
        },
    ]);
    if (optio.select === "Add") {
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: chalk.magenta("What you want to add in your Todos?"),
                validate: (userInput) => {
                    if (userInput.trim() === "") {
                        return chalk.redBright("Please enter something.");
                    }
                    return true;
                },
            },
            {
                name: "addMore",
                type: "confirm",
                message: chalk.green("Do you want to add more task or delete task?"),
                default: false,
            },
        ]);
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos);
    }
    if (optio.select === "Delete") {
        let deleop = await inquirer.prompt([
            {
                name: "Deleteop",
                type: "confirm",
                message: chalk.magenta.bold("Are you sure you want to delete this task?"),
                default: false,
            },
        ]);
        todos.pop();
        condition2 = deleop.Deleteop;
        console.log(todos);
    }
}
// let fruitchaat = ["banana","Apple","Orange"];
// // fruitchaat.push("Melon") // for adding data in the end of array
// // fruitchaat.pop() // remove last data
// fruitchaat = fruitchaat.concat('Melon',"Kiwi") // add data in the last of array
// console.log(fruitchaat);
// // while loop
// let a = 0;
// while (a <= 10){
//     console.log("RamdanFasting")
//     console.log("Five Time Paying")
//     a++;
// }
