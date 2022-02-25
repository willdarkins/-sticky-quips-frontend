
# 💻 Sticky Quips

## Description
A note taking applications that provides user the experience of writing sticky notes with short despcritions and links. There are varying colors to the notes,
and each stored in a cloud database.

Please follow **[THIS LINK](https://budget-tracker-darkins-v2.herokuapp.com/)** to the deployed application.

![sticky-quips_example](https://user-images.githubusercontent.com/84754257/155663969-3fe57451-b97d-45af-8ca6-7bc1eb6631a5.gif)

## Table of Contents

* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Badges 
*The following programming languages, frameworks, platforms and libraries were utilized when completing this project:*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Installation
<br>

- In the Github repository, copy the SSH key link to clone onto your local device
- Open the project in your code editor of choice and enter the following command in console:
  - `npm i`
  - The following dependencies will being to run:
    - `compression` - `express` - `mongoose` - `morgan`
- Upon deployment of the application there should be an option to download the progressive web app version to your desktop:
  - The option should be available in the address bar
- You'll be promted to install the Budget Tracker application. Select Open, navigate to your desktop, then click on the available icon to open the application.
- A corresponding web manifest informs the browser about this PWA and how it should behave:

```json
{
    "name": "Budget Tracker",
    "short_name": "B-Track",
    "icons": [
        {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "start_url": "/",
    "display": "standalone"
}
```
## Usage

- Users can keep track of their finances with a running total located at the top of the screen
- After naming a transaction and amount in the corresponding text fields, selet either button to `+ Add Funds` or `- Subtract Funds`
- Itemized transactions will appear slightly below that section
- Just below that is an html canvas element to provide a visual representation of the user's budget
- If network connection is weak, or there is a loss of connectivity (⚠️), the application should include data persistence that allows users to continue making transactions
  - When connection is re-established, an altert reading `All saved budget data has been submitted!`will notify the user that all data handled during loss of connectivity has been submitted to the database
  - You can view the cached data in the `Application` tab in Chrome Dev Tools

## Credits
Big shout out to <a href = https://github.com/Ileriayo>Ileriayo Adebiyi</a> and his <a href =https://github.com/Ileriayo/markdown-badges>markdown badges repository</a> which made this project all the more beautiful. Thank You.<br>

## License
*This project is licensed under:* <br>
![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)<br>
<a href= https://opensource.org/licenses/MIT)>MIT License Link</a><br>

## Contributing
This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.

## Questions
![Profile Pic](https://user-images.githubusercontent.com/84754257/145705294-57134da6-c3b7-40f4-bcbe-ad9cddb27f47.jpg)

If you have any questions regarding the development process of this application, or specific questions about contributing, feel free to reach me by email or on Github.
* Email 📪 willdarkins@gmail.com
* Github 🗿 [willdarkins](https://github.com/willdarkins) 



























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
