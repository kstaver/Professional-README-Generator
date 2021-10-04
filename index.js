// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { toNamespacedPath } = require('path');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", 
"What is your github Username?",
"What is your email address?",
"Please provide a description of your project: ",
"Please provide step-by-step installation instructions for your project: ",
"Please provide details on how to use this application: ",
"Which license will you use for your project?",
"Would you like to allow other developers to contribute?",
"Please provide guidelines for contributing: ",
"Please provide instructions on how to test the app: ",
"Please provide a link to your project: "];

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
    const [title, username, email, description, 
    installation, usage, license, confirm, contributorGuidelines, test, 
    link] = questions;

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
        name: "username",
        message: username,
        validate: linkInput => {
            if(linkInput){
                return true;
            }else{
                console.log("Please enter your github username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: email
    },
    {
        type: "input",
        name: "description",
        message: description,
        validate: description => {
            if(description){
                return true;
            }else{
                console.log("Please enter a description about your project.");
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: installation,
        validate: installation => {
            if(installation){
                return true;
            }else{
                console.log("Please list step by step instructions on how to install your project.");
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: usage,
        validate: usageInput => {
            if(usageInput){
                return true;
            }else{
                console.log("Please provide instructions and examples for use.");
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: license,
        choices: [
            "agpl-3.0",
            "Apache License 2.0",
            "mit", 
            "gpl-3.0", 
            "lgpl-3.0",
            "mpl-2.0", 
            "bsl-1.0", 
            "unlicense"
        ] 
    },
    {
        type: "confirm",
        name: "confirm",
        message: confirm,
        default: true
    },
    {
        type: "input",
        name: "contributorGuidelines",
        message: contributorGuidelines,
        when: ({confirm}) => {
            if(confirm){
                return true;
            }else{
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: test,
        validate: testInput => {
            if(testInput){
                return true;
            }else{
                console.log("Please enter instructions for running tests.");
            }
        }
    },
    {
        type: "link",
        name: "link",
        message: link,
        validate: linkInput => {
            if(linkInput){
                return true;
            }else{
                console.log("Please provide a link to your project.");
            }
        }
    }
])
    .then(data => generateMarkdown(data))
    .then(pageLayout => writeToFile("README.md", pageLayout))
};

// Function call to initialize app
init();
