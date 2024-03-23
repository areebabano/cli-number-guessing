#!/usr/bin/env node
import { createDiffieHellmanGroup } from "crypto";
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome To Number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Enter your guessing number b/w 1-6"
    }
])

if(answer.userguessednumber === randomNumber){
    console.log("congratulations! You Win")
} else{
    console.log("Game Over! You lose")
}

console.log("The End");