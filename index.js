import inquirer from "inquirer";
import fs from "fs";

const licenseBadge = (license)=>{
    if (license){
        switch (license){
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case 'BSD':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        case 'Mozilla Public License2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        default:
            return'';
    }
}   
        else{
            return '';
        }
};
const licenseLink = (license)=>{
if (license){
    switch(license){
        case 'MIT':
            return'[MIT License](https://opensource.org/license/MIT)'
        case 'Apache':
            return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)'
        case 'BSD':
            return'[BSD License](https://opensource.org/license/BSD-3-clause)'
        case 'Mozilla Pubic License2.0':
            return'[https://www.mozilla.org/en-US/MPL/]'
    }
}};


const generateReadme= ({title, description, installation, usage, contributing, tests, username, email, license, repo}) =>
    `## Title
    ${title}

    ## Description
    ${description}

    ## Table of contents
        [Installation](#installation)
        [Usage](#usage)
        [License](#license)
        [Contributing](#contributing)
        [Tests](#tests)
        [Questions](#questions)
    

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ##License
    ${license}
    ${licenseLink(license)}
    ${licenseBadge(license)}

    ##Contributing
        Authored by ${contributing}.

    ## Tests
    ${tests}

    ##Questions
        If you have questions or concerns you can reach ${username} at ${email} or at ${repo}.

    
`


inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Name?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email you want to be reached at for questions?'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter GitHub link for your GitHub profile'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to call your project? (e.g., "my-project")'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation dependencies required for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the puprpose of your project, and what does it accomplish?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter any authors who contributed to this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions for your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            choices: ['MIT', 'Apache', 'BSD', 'Mozilla Public License2.0']
        }
    ])
    .then((response)=>{
        const readmePageContent = generateReadme(response);


        fs.writeFile("README", readmePageContent, (err)=>
        err ? console.log(err) : console.log("successfully created README file!")
    );
});