import inquirer from "inquirer";
import fs from "fs";

const generateReadme= ({title, description, installation, usage, contributing, tests}) =>
    `#${title}
`


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Install packages npm'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'This is used for'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'contributing?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'test for'
        },
    ])
    .then((response)=>{
        const readmePageContent = generateReadme(response);

        fs.writeFile("README", readmePageContent, (err)=>
        err ? console.log(err) : console.log("successfully created README file!")
    );
        console.log(`The tiltle of your readme is ${response.title}`),
        console.log(`Your description is ${response.description}`),
        console.log(`Installations used ${response.installation}`),
        console.log(`The usage for this ${response.usage}`),
        console.log(`contributing to this ${response.contributing}`),
        console.log(`the test are ${response.tests}`)
        });