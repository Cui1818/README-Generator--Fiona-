// function to generate markdown for README
function generateMarkdown(data) {
    // var 
  return `This project title ${data.title}

${data.description}


[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

# Installation 
The following necessary dependencies must be installed for this app ${data.installation}.
# License
This project has ${data.license} license.
# Usage 
In order to use this app,${data.usage}
# Test
${data.tests}

# Github username
${data.question}

         

 
`;
}



module.exports = generateMarkdown;
