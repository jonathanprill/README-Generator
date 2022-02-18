
module.exports = templateData => {
    //(organized into 3 separate sets of data)destructure projects and about data from tempalteData based on their property key names
    const { title, description, install, usage, license, guidlines, testing, github, email } = templateData;
    
    
    
    
return `
    
# ${title} ![badmath](https://img.shields.io/badge/license-${license}-blue)
    
## Description

${description} 

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidlines](#contributing-guidlines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## License

![badmath](https://img.shields.io/badge/license-${license}-blue)

This project is using the ${license} license. For more information on this and other licenses please reference: [https://choosealicense.com/](https://choosealicense.com/).

    ## Contributing Guidlines

${guidlines || 'This project is using the [Contributor Covenant](https://www.contributor-covenant.org/) as a default. Please read over these guidlines before contributing'}
    
## Test Instructions

${testing}

## Questions
Reach out via my [Github Profile](https://github.com/${github})
Or email me at ${email} if you have any questions.
`;
  };

  