# Searo Project Task

A simple search application based on the provided wireframes and UI, this application uses the public REST API [restcountries.eu](https://restcountries.eu) which allows the search by country name and capital.

This is a link to the project [demo](http://searo.surge.com)

## Features
  * The search is using a public REST API with JavaScript.
  * Displaying partial search results in a list beneath the search field.
  * When hitting [ENTER] the selected search value is saved with date/timestamp beneath the search box (as a search history).
  * The application is responsive.
  * No plugins used.
  * Very subtle animation to add a better user experience using CSS3.

## Languages and Tools
* This project is build using semantic **HTML5**, **SCSS** compiled to **CSS** and **JS ES5**.

* **npm scripts** is used as the building tool for: 
  * preprocessing SCSS files to CSS and adding source map for easier debugging.
  * Adding CSS3 vendor prefixes.
  * Linting JS and HTML.
  * Minifying for production the CSS, JS, HTML and images (the Searo logo and search icon svg files).
  * Creating a live server and watching file changes during production.

* The **VS Code editor** for the production.

## Browser support
This application is tested on the browsers Chrome, Safari, Firefox and Internet Explorer 10 and edge. 
The application is tested on android and IOS devices in addition to Windows and Mac desktop.

## Project Folder Structure
    .
    ├── builds                  # The Main Project folder.
    │   ├── development         # Use for viewing the code, Source files for the developing process.
    │   │   ├── css
    │   │   ├── images
    │   │   ├── js
    │   │   ├── scss
    │   │   └── index.html
    │   └── production          # Use for deployment, all files and images are compressed and minified.
    │   │   ├── css
    │   │   ├── images
    │   │   ├── js
    │   │   └── index.html
    ├── .gitignore              # Specifies intentionally untracked files to ignore on github
    ├── .editorconfig           # Maintain consistent coding styles between editors, check editorconfig.org if editor plugin needed.
    ├── .README.md              # About this project and documentation.
    └── package.json            # Includes the npm scripts and dependencies for development.

## usage
* For direct production and deployment use the folder **builds > production**
* For developing and/or viewing the written HTML, SCSS, CSS and JS code navigate to the folder **builds > development**

## Instructions for development and production

1. Clone or Download the project.

2. Install node.js and npm from nodejs.org (npm is already packaged with the node installation).

4. to check that Node.js and npm are properly installed run the commands `node -v` and `npm -v` in the Terminal or Command Prompt on Windows, you should get the version number.

5. In the Terminal or Command Prompt, Navigate to the project directory using the command `cd` followed by the directory path.

6. run the command `npm install` to download all needed dependencies for development and production, the dependencies folders and files will be downloaded to the project directory in a created folder node_modules.

6. To start developing run the command `npm start`, for final production and deploying run the command `npm run build`.

## About The Code
This section is a brief about the code written in this project.
### CSS
- Using Normalize.css, In order to make browsers render all elements more consistently and in line with modern standards.
### HTML5
- The `no-js` class is provided in order to allow you to more easily and explicitly add custom styles based on whether JavaScript is disabled (`.no-js`) or enabled (`.js`). Using this technique also helps [avoid the FOUC]
### JS

## Working On
- Add Favicon
- Add Reset CSS
- Add HTML CSS and JS Lint
- Compile JS
- AutoPrefix Fix
- Server Surge fast deploy
- Add Google Analytics in the HTML
- Add robots.txt
