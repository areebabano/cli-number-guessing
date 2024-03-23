#!/usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);

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