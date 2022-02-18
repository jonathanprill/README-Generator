// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
         return true;
      } else {
        console.log('Please enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
    validate: installInput => {
      if (installInput) {
         return true;
      } else {
        console.log('Please enter Installation Instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
    validate: usageInput => {
      if (usageInput) {
         return true;
      } else {
        console.log('Please enter Usage Information!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose a license. A license tells others what they can and can't do with your code.",
    choices: ['Apache2.0', 'MIT', 'BSD', 'Boost-Software', 'Mozilla', 'GNU', 'Eclipse']
  },
  {
    type: 'confirm',
    name: 'confirmGuidlines',
    message: 'Would you like to add custom Contribution Guidlines? If not, the default Contributor Covenant Guidlines will be applied',
    default: true
  },
  {
    type: 'input',
    name: 'guidlines',
    message: 'Enter custom Contribution Guidlines:',
    when: ({ confirmGuidlines }) => {
      if(confirmGuidlines) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Write testing instructions for your application and provide examples on how to run them. (Required)',
    validate: testingInput => {
      if (testingInput) {
         return true;
      } else {
        console.log('Please enter Testing Instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github Username. (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your Github Username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email Address. (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email Address!');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file

function writeToFile(data) {
  fs.writeFile('./dist/README.md', `${data}`, err => {
  if (err) throw err;

  console.log('README complete! Check out README.md to see the output!');
  });
}



// TODO: Create a function to initialize app
function init() {return inquirer.prompt(questions)}

// Function call to initialize app
init()
  .then(data => {
    return generatePage(data); // The finished portfolio data object is returned as portfolioData and sent into the generatePage() function, which will return the finished HTML template code into pageHTML.
  })
  .then(pageHTML => {
    return writeToFile(pageHTML); // We pass pageHTML into the newly created writeFile() function, which returns a Promise. This is why we use return here, so the Promise is returned into the next .then() method. 
  })
  
  .catch(err => {
    console.log(err);
});
