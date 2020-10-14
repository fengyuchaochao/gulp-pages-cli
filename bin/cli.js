#!/usr/bin/env node
const process = require('process');
const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'your project name?'
    }
]).then(answer => {
    const tmplDir = path.join(__dirname, 'templates');
    const destDir = process.cwd();

    fs.readdir(tmplDir, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            fs.writeFileSync(path.join(destDir, file), file);
        })
    });
});
