"use strict";
//const for require:
const fs = require("fs");

//Inquirer questions to generate the readme file:
let inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "InputUserName",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "inputEmail",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message: "What is your Project's Name?",
      name: "inputProjectName",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "inputDesc",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "inputLicense",
      choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "None"],

      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message: "What command should you run to install dependencies?",
      name: "inputDepend",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message: "What command should be run to run test?",
      name: "inputTest",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the Repo?",
      name: "inputRepo",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a value";
        }
      },
    },
  ])

  .then(
    ({
      inputUserName,
      inputEmail,
      inputProjectName,
      inputDesc,
      inputLicense,
      inputDepend,
      inputTest,
      inputRepo,
    }) => {
      const template = `#${inputProjectName}
      # Liscense:<a name="liscense"></a> ${inputLicense}

## Table of contents <a name="table"></a>
* [Table of Contents](#table)
* [Liscense](#liscense)
* [Description](#description)
* [Installation](#install)
* [Contributing](#contributing)
* [Test]](#test)
* [Questions](#questions)



# Description(#description)
${inputDesc}

# Installation(#installation)
${inputDepend}

  
# Contributing(#contributing)
${inputRepo}

## Test(#test)
${inputTest}

## Questions <a name="questions"></a>
If you have any questions about the repo, open an issue or contact me directly at ${inputEmail}.
You can find more of my work at [${inputUserName}](https://github.com/${inputUserName})

[Back to top](#top)

`;
      createNewFile(template);
    }
  );

function createNewFile(data) {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Your README file has been generated");
  });
}
