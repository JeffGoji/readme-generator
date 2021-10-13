"use strict";
const { userData } = require("domain");
const fs = require("fs");

let inquirer = require("inquirer");
inquirer.prompt([
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
    type: "input",
    message: "What kind of license should your project have?",
    name: "inputLicense",
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
    message: "What is your email address?",
    name: "Email",
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
    name: "Test",
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
    message: "What does the user need to know about contributing to the Repo?",
    name: "Repo",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value";
      }
    },
  },
]);
