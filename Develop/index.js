// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", 
"What is your github Username?",
"What is your email address?",
"What is your project and what problem will it solve?",
"Why did you create this project?",
"How will someone use your project?",
"Please provide step-by-step installation instructions for your project.",
"Please provide examples for use.",
"Which license will you use for your project?",
"Would you like to allow other developers to contribute?",
"Please provide guidelines for contributing.",
"Please provide instructions on how to test the app.",
"Please provide a link to your project:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if(err){
            throw err;
        }
        console.log("Information saved to README!")
    });
};

// TODO: Create a function to initialize app
function init() {
    const [title, username, email, solveProblem, whyCreate, howToUse, 
    installInstruct, examples, license, confirm, contributors, tests, 
    linkToProject] = questions;

    return inquirer.prompt([{
        type: "input",
        name: "title",
        message: title,
        validate: titleInput => {
            if(titleInput){
                return true;
            }else{
                console.log("Please enter the title of your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "githubUsername",
        message: username,
        validate: githubUsernameInput => {
            if(githubUsernameInput){
                return true;
            }else{
                console.log("Please enter your github username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubEmail",
        message: email,
        validate: gitHubEmailInput => {
            if(gitHubEmailInput){
                return true;
            }else{
                console.log("Please enter your email address.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "solveWhatProblem",
        message: solveProblem,
        validate: solveWhatProblemInput => {
            if(solveWhatProblemInput){
                return true;
            }else{
                console.log("Please enter details regarding what your project is.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "create",
        message: whyCreate,
        validate: createInput => {
            if(createInput){
                return true;
            }else{
                console.log("Please provide a description of why you made this project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "howTo",
        message: howToUse,
        validate: howToInput => {
            if(howToInput){
                return true;
            }else{
                console.log("Please provide information on how someone would use your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: installInstruct,
        validate: installInput => {
            if(installInput){
                return true;
            }else{
                console.log("Please list step by step instructions on how to install your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "example",
        message: examples,
        validate: exampleInput => {
            if(exampleInput){
                return true;
            }else{
                console.log("Please provide instructions and examples for use.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "licenses",
        message: license,
        choices: ["agpl", "apache", "mit", "no license"] 
    },
    {
        type: "input",
        name: "confirm",
        message: confirm,
        default: true
    },
    {
        type: "input",
        name: "contributorGuidelines",
        message: contributors,
    },
    {
        type: "input",
        name: "test",
        message: tests,
        validate: testInput => {
            if(testInput){
                return true;
            }else{
                console.log("Please enter instructions for running tests.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "link",
        message: linkToProject,
        validate: linkInput => {
            if(linkInput){
                return true;
            }else{
                console.log("Please provide a link to your project.");
                return false;
            }
        }
    }
])
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput);
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
