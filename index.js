"use strict";
//const for require:
const fs = require("fs");

// Inquirer questions to generate the readme file:
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
      choices: ["MIT", "APACHE2.0", "BSD3", "GPL3.0", "None"],

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
      message: "What command should be run to run the program?",
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
  // Create the template:
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
      const template = `# ${inputProjectName}

<a name="liscense"></a>[![License:${inputLicense}](https://img.shields.io/badge/License-${inputLicense}-yellow.svg)](https://opensource.org/licenses/${inputLicense})

## Table of contents <a name="table"></a>
* [Table of Contents](#table)
* [Liscense](#liscense)
* [Description](#description)
* [Installation](#install)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)



# Description <a href="description"></a>
${inputDesc}

# Installation<a href="installation"></a>
${inputDepend}

# Test<a href="test"></a>
${inputTest}
  
# Contributing<a href="contributing"></a>
${inputRepo}

## Questions <a name="questions"></a>
If you have any questions about the repo, open an issue or contact me directly at ${inputEmail}.
You can find more of my work at [${inputUserName}](https://github.com/${inputUserName})

[Back to top](#top)

`;
      createNewFile(template);
    }
  );

// Write the template to a README.md file:
function createNewFile(data) {
  fs.writeFile("./readme_files/README.md", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Your README file has been generated");
  });
}
