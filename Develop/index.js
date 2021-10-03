// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project? ", 
"What is your GitHub Username? ",
"What is your email address? ",
"What is your project and what problem will it solve? ",
"Why did you create this project? ",
"How will someone use your project? ",
"Please provide step-by-step installation instructions for your project.",
"Please provide examples for use.",
"Which license will you use for your project? ",
"Would you like to allow other developers to contribute? ",
"Please provide guidelines for contributing. ",
"Please provide instructions on how to test the app. ",
"Please provide a link to your project: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const [title, username, email, solveProblem, whyCreate, howToUse, 
    installInstruct, examples, license, contribute, tests, 
    linkToProject] = questions;

    return inquirer.prompt([{
        type: "input",
        name: "title",
        message: title,
        validate: titleInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubUsername",
        message: username,
        validate: gitHubUsernameInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubEmail",
        message: email,
        validate: gitHubEmailInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "solveWhatProblem",
        message: solveProblem,
        validate: solveWhatProblemInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "create",
        message: whyCreate,
        validate: createInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "howTo",
        message: howToUse,
        validate: howToInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: installInstruct,
        validate: installInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "example",
        message: examples,
        validate: exampleInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "licenses",
        message: license,
        validate: licensesInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributors",
        message: contribute,
        validate: contributorsInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: tests,
        validate: testInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "link",
        message: linkToProject,
        validate: linkInput => {
            if(){
                return true;
            }else{
                console.log("");
                return false;
            }
        }
    }
])}

// Function call to initialize app
init();
