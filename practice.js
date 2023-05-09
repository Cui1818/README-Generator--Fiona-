const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "user_name"
    },
    {
        type: "number",
        message: "How old are you?",
        name: "age"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "fav_color",
        choices: ["red", "green", "blue", "orange"]
    },
    {
        type: "confirm",
        message: "Are you happy?",
        name: "happy"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(
        path.join(__dirname, "app", fileName),
        data
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answerObj) => {
            var data = generateHTML(answerObj);
            writeToFile("aboutMe.html", data);
        })
}

// function call to initialize program
init();
