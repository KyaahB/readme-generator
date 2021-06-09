// TODO: Include packages needed for this application
// inquirer is installed. 
// (https://www.npmjs.com/package/inquirer)

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require ('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = require[inquirer];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username? (input github link)',
     
    },
    {

      type: 'input',
      name: 'email',
      message: 'What is your email address?',
     
    },
    {
 
      type: 'input',
      name: 'title',
      message: 'What is the name of your project name?',
    
    },

    {
 
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      
      },

      {
 
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?(use arrow keys)',
        choices: 
        [
            'MIT', 'APACHE 2.0', 'GPL 2.0', 'BSD 3', 'NONE'
        ]
      
      },

      {
 
        type: 'input',
        name: 'dependencies',
        message: 'What command should run to install dependencies?',
      
      },

      {
 
        type: 'input',
        name: 'testing',
        message: 'What command should run to run tests?',
      
      },

      {
 
        type: 'input',
        name: 'info',
        message: 'What does the user need to know about using the repo?',
      
      },

      {
 
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
      
      },
  ])
  .then((response) =>{
    // response.title === response.input,
    console.log(response)

    let myReadme = generateMarkdown(response)

    console.log(myReadme)

    writeToFile("README.md", myReadme)

  });

//    README SHOULD GENERATE AFTER THIS!!!

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('README successfully created!')
    })
};

