// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    `
  }
  else if(license == 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  
  
  }
  else if(license == 'GPL 2.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

    `

  }
  else if(license == 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

    `
  }
  
  else {
    return ' '
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license == 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  else if(license == 'APACHE 2.0') {
    return `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license == 'GPL 2.0') {
    return `[GPL 2.0](https://opensource.org/licenses/GPL-2.0)`
  }
  else if(license == 'BSD 3') {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  }
  
  else {
    return 'NONE'
  }

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

 

## License

${renderLicenseLink(data.license)}



## Installation Instructions

${data.info}



## Contributions
${data.contributions}



## Commands

Dependency Command : ${data.dependencies}
Test Command : ${data.testing}




## Creator's Information/Notes

My motivation to create this project was to not only succeed in completing the assignment but also to become a possible contributing factor in being the help that I wish I had when I'm the user.

I created this ReadMe Generator to aid users on their project creating journeys so that this one simple but big part could be a breeze. Which in turn, will allow them to spend more time and save thier brain power for the actual project.

While building this app I learned that things sometimes aren't as difficult as they seem. Most things, especially in coding just take patience, concentration and an open mind. They can be tricky but guidance helps a lot. 

If you have any further questions or just need more of an understanding of this app, I can be reached at [Creator's email](kyaahh@gmail.com).

## Contact

[Github:] ${(data.username)}


## Video Link 
[Readme Generator](https://drive.google.com/file/d/1AIeVeuxTubTiKhhahuuyJO4C0Z1vqAPV/view)
 

`;
}

module.exports = generateMarkdown;

