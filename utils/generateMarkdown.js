// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const {userInfo} = require("os");
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return '[License](https://choosealicense.com/licenses/${license})';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  return `## License
  This project is covered under the ${license} ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#test)
  - [Questions](#questions)
  - [Contact Info](#contact-info)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contributorGuidelines}

  ## Testing
  ${data.test}

  ## Questions
  You can find the link to my application [here](${data.link}).
  If you have any questions pertaining to ${data.title}, feel free to contact me.
  
  ## Contact Info
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
