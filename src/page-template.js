
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

    This project is under a ${license} license. More info on licensing can be found here: [https://choosealicense.com/](https://choosealicense.com/).

    ## Contributing Guidlines

    ${guidlines || 'Using [Contributor Covenant](https://www.contributor-covenant.org/) as a standard.'}
    

    ## Test Instructions

    Go the extra mile and write tests for your application. Then provide examples on how to run them here.

    ## Questions
    Reach out via my gitbug profile here
    <link to github profile>
    or email me at
    <link to email address>



    `;
  };

  