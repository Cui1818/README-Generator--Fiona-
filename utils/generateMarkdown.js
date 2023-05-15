// function to generate markdown for README
function generateMarkdown(data) {
    // var 
  return `This project title ${data.title}

${data.description}


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

# Installation 
This projest has installed ${data.installation}.
This project has ${data.license} license.


Do you have any questions about this project ?(Y/N)
${data.tests}

         

 
`;
}



module.exports = generateMarkdown;
