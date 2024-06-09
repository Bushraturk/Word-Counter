#! /usr/bin/env node

//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n\t\tWellcome  To Word Counter"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let answers = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter a Sentence",
  },
]);

//Trimming the sentence and splitting it into words based on "space"
let words = answers.sentence.trim().split(" ")

//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
