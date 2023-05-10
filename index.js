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
    message:"the  description of your project.",
    name :"Description"
},{ 
    type:"input",
    message:"Table of contents.",
     name:"Table",
// },{ type:"input",
//     message:"What tool do you installation ?",
//     name:"Installation",
},{ type:"list",
    message:"What is your license?",
    choices:["MIT","ISC","GNUPLv3"],
    name:"contact",
// },{ type:"input",
//     message:"what is the contributing?",
//     name:"contirbuting",
// },{ type: "input",
//      message:"What test do you have ?",
//     name:"Tests",
},{ type:"confirm",
   message:"Do you have any question?",
   name:"question",
}

];

/*const answerObj = {Description:"this is a readme",contact:"bhbjsbdh"
}
const dog = {name:"Spot",color:"Brown"}

const template = ``
console.log(`My dog's name is ${dog.name}`)*/


// inquirer.prompt({type:"input",name:"location",message:"Where are you located?"}).then(answer=>{
//     console.log(answer.location)
// })

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
writeToFile("README.md",data );

})
}

// function call to initialize program
init();
