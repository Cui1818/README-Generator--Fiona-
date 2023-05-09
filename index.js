const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type :"input",
    message:"What is the title of the project?",
    name:"Title"
},{
    type:"input",
    message:"the  descriptionf your project.",
    name :"Description"
},{ 
    type:"input",
    message:"Table of contents.",
     name:"Table of contents",
},{ type:"input",
    message:"What tool do you installation ?",
    name:"Installation",
},{ type:"input",
    message:"What license do you have ?",
    name:"License",
},{ type:"input",
    message:"what is the contributing?",
    name:"contirbuting",
},{ type: "input",
     message:"What test do you have ?",
    name:"Tests",
},{ type:"confirm",
   message:"Do you have any question?",
   name:"qestion",
}

];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(
 path.join(__dirname,"app",fileName),   
)
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answerObj) =>{
var data = generateMarkdown(answerObj);
writeToFile("READMe.html",data );

})
}

// function call to initialize program
init();
