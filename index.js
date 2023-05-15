const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    }, {
        type: "input",
        message: "the  description of your project.",
        name: "description"
    }, {
        type: "input",
        message: "What tool do you installation ?",
        name: "installation",
    }, {
         type:"list",
        message:"What is your license?",
        choices:["MIT","ISC","GNUPLv3"],
        name:"license",
    }, {
        type: "input",
        message: "what is the contributing?",
        name: "contirbuting",
    }, {
        type: "input",
        message: "What test do you have ?",
        name: "tests",
    }
    // , {
    //     type: "confirm",
    //     message: "Do you have any question?",
    //     name: "question",
    // }

];



//function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answerObj) => {
            var markdown = generateMarkdown(answerObj);
            var filePath = path.join(__dirname, "app", "ReadMe.md")
            fs.writeFile(filePath, markdown, function () {
                console.log("Successfully Written!");
            });

        })
}

// function init(){
//  inquirer.prompt(questions)
//  .then(function(data){
//  writeToFile("README.md",generateMarkdown(data));
//  console.log(data)
//  })
// }

// function call to initialize program
init();

