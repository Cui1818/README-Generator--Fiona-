// function to generate markdown for README
function generateMarkdown(data) {
    // var 
  return `What is the title of the project ?
          ${data.title}
          Description 
          ${data.Description}
          if your README is long, add a table of contents to make it easy for users to find what they need.

   [Installation](#installation)
   [Usage](#usage)
   [Credits](#credits)
    [License](#license)

         Table of Contents 
         ${data.table}
         What is your License ?
         ${data.contact}
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  

 
`;
}



module.exports = generateMarkdown;
