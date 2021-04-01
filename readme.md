
# Team Generator
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

A program which prompts the user for employee information, and then writes that information to an HTML document.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Walkthrough](#walkthrough)
* [Comments](#comments)
* [Questions](#questions)

## Installation

Run "npm install" in the command line to install required modules.

## Usage

Run "node index" in the terminal to launch the prompt. Upon answering all questions, an index.html file will be generated inside the dist folder.

## Tests

Run "npm run test" to run tests. Jest must be installed.

## Walkthrough

A walkthrough video of this program can be found [here](https://drive.google.com/file/d/1-O4Y-daImZZ94TYXbLrniOLSfaqS3115/view).

## Comments

This assignment had one deviation from the outlined class strucure in the given readme. The assignment calls for a getRole() method that is local to each class, overriding the parent Employee class's method. However, getRole() as defined in my Employee class is already modular, returning this.constructor.name. As such, there was no need for child versions of this method.

## Questions

For any questions, please contact Griffin Paier via  
* Github: https://github.com/gmpaier
