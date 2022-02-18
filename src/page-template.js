
module.exports = templateData => {
    //(organized into 3 separate sets of data)destructure projects and about data from tempalteData based on their property key names
    const { title, description, install } = templateData;
    
    return `
    
    # ${title}
    <!-- https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> -->

    ## Description

    ${description} 

    ## Table of Contents 

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing Guidlines](#contributing guidlines)

    ## Installation

    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

    ## Usage

    Provide instructions and examples for use. Include screenshots as needed.

    ## License

    Let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    <!-- https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> -->

    <!-- https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> -->
    <!-- 
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) -->

    ## Contributing Guidlines

    Include specific guidelines for how to contribute, or if you'd prefer use [Contributor Covenant](https://www.contributor-covenant.org/) as a  standard.

    ## Test Instructions

    Go the extra mile and write tests for your application. Then provide examples on how to run them here.

    ## Questions
    Reach out via my gitbug profile here
    <link to github profile>
    or email me at
    <link to email address>



    `;
  };

  