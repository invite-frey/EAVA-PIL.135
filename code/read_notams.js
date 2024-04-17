#!/usr/local/bin/node

/*
* Reads all json files in the current directory and aggregates their contents into a Markup-file.
*
* Usage: ./read-notams.js -o outputfile
*
* Copyright (c) 2024 Frey Mansikkaniemi
*/

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to parse command line arguments for the -o option
function getOutputFilename() {
    const oIndex = process.argv.indexOf('-o');
    if (oIndex !== -1 && process.argv.length > oIndex + 1) {
        return process.argv[oIndex + 1];
    }
    return false; // Default filename base if -o is not provided or has no value
}

// Function to read all JSON files and combine their data into one array
function combineJSONFiles() {
    fs.readdir('.', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        let combinedData = [];

        files.forEach(file => {
            if (path.extname(file) === '.json') {
                try {
                    const data = fs.readFileSync(file);
                    const json = JSON.parse(data);
                    combinedData = combinedData.concat(json);
                } catch (error) {
                    console.error(`Error reading or parsing ${file}:`, error);
                }
            }
        });

        console.log(`Combined JSON data ${combinedData.length}`);
        const filename = getOutputFilename();
        if( filename ){
            writeArrayElementsToFile(combinedData,filename);
        }
    });
}

// Function to write only the specified property of each object in the array to a single file
function writeArrayElementsToFile(array,filename) {
    
    
    const propertyName = "all";
    const groupProperty = "location";

    let text = ""
    let location = ""

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if( element['location'] !== location ){
            location = element['location']
            text += `\n\n# ${location}\n`
        }

        text += `\n## ${element['id']}\n`
        text += element['all'] + '\n\n'
        
    }

    //const filteredData = array.map(item => item[propertyName]).filter(item => item !== undefined);

    //const data = filteredData.join("\n\n---------------------------------------------------------------\n\n")
    fs.writeFile(filename, text, (err) => {
        if (err) {
            console.error(`Error writing to file ${filename}:`, err);
        } else {
            console.log(`Successfully wrote filtered data to file ${filename}`);
        }
    });
}

combineJSONFiles();