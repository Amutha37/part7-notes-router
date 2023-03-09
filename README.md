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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Implement front end screen to input user and password.

Run `npm run build`

copy to backend
and run the appilication again.
.

### 5..11 Define PropTypes

- Implement `buttonLabel` required to prevent no lable text.

- The expected and required props of a component can be defined with the prop-types package.

> `npm install prop-types`

('import PropTypes from 'prop-types'

LoginForm.propTypes = {
handleSubmit: PropTypes.func.isRequired,
handleUsernameChange: PropTypes.func.isRequired,
handlePasswordChange: PropTypes.func.isRequired,
username: PropTypes.string.isRequired,
password: PropTypes.string.isRequired
})

(import PropTypes from 'prop-types'

Togglable.propTypes = {
buttonLabel: PropTypes.string.isRequired
})

### 5.12 ESlint

NB: `do not run the eslint --init command. It will install the latest version of ESlint that is not compatible with the configuration file created by create-react-app!`

Next, we will start testing the frontend and in order to avoid undesired and irrelevant linter errors we will install the eslint-plugin-jest package:

> `npm install --save-dev eslint-plugin-jest`### 5..11 Define PropTypes

- Implement `buttonLabel` required to prevent no lable text.

- The expected and required props of a component can be defined with the prop-types package.

> `npm install prop-types`

('import PropTypes from 'prop-types'

LoginForm.propTypes = {
handleSubmit: PropTypes.func.isRequired,
handleUsernameChange: PropTypes.func.isRequired,
handlePasswordChange: PropTypes.func.isRequired,
username: PropTypes.string.isRequired,
password: PropTypes.string.isRequired
})

(import PropTypes from 'prop-types'

Togglable.propTypes = {
buttonLabel: PropTypes.string.isRequired
})

### 5.12 ESlint

NB: `do not run the eslint --init command. It will install the latest version of ESlint that is not compatible with the configuration file created by create-react-app!`

Next, we will start testing the frontend and in order to avoid undesired and irrelevant linter errors we will install the eslint-plugin-jest package:

> `npm install --save-dev eslint-plugin-jest`

# Testing React apps

Jest is actually configured default to applications created with create-react-app.

In addition to Jest, we also need another testing library that will help us render components for testing purposes. The current best option for this is react-testing-library `https://github.com/testing-library/react-testing-library` which has seen rapid growth in popularity in recent times.

> `npm install --save-dev @testing-library/react @testing-library/jest-dom`

In addition to testing-library , jest-dom is also installed `https://testing-library.com/docs/ecosystem-jest-dom/` that provides some nice Jest-related helper methods.

We can use the object screen`https://testing-library.com/docs/queries/about/#screen` to access the rendered component. We use screen's method getByText `https://testing-library.com/docs/queries/bytext/` to search for an element that has the note content and ensure that it exists:

### Running test

Create-react-app configures tests to be run in watch mode by default, which means that the npm test command will not exit once the tests have finished, and will instead wait for changes to be made to the code. Once new changes to the code are saved, the tests are executed automatically after which Jest goes back to waiting for new changes to be made.

If you want to run tests "normally", you can do so with the command:

`CI=true npm test`

NB: the console may issue a warning if you have not installed Watchman. Watchman is an application developed by Facebook that watches for changes that are made to files. The program speeds up the execution of tests and at least starting from macOS Sierra, running tests in watch mode issues some warnings to the console, that can be removed by installing Watchman.

Instructions for installing Watchman on different operating systems can be found on the official Watchman website: `https://facebook.github.io/watchman/`

In this test I have installed watchman latest version 2022.2.14.00

# Debugging tests

We typically run into many different kinds of problems when writing our tests.

Object screen has method debug that can be used to print the HTML of a component to terminal.
use

`screen.debug()`

It is also possible to use the same method to print a wanted element to console:

`
....
const element = screen.getByText('Component testing is done with react-testing-library')

screen.debug(element)

# Clicking buttons in tests

Install a library user-event that makes simulating user input a bit easier:
`npm install --save-dev @testing-library/user-event`

Clicking happens with the method click of the userEvent-library.

The expectation of the test verifies that the mock function has been called exactly once.

At the moment of writing (28.1.2022) there is a mismatch between the version of a dependency jest-watch-typeahead that create-react-app and user-event are using. The problem is fixed by installing a specific version:

`npm install -D --exact jest-watch-typeahead@0.6.5`

##

## End to end INTERGRATION testing

Unit

### 5.17 Bloglist end to end testing

### Getting Started with Cypress

E2E library Cypress has become popular within the last year. Cypress is exceptionally easy to use, and when compared to Selenium, for example, it requires a lot less hassle and headache. Its operating principle is radically different than most E2E testing libraries, because Cypress tests are run completely within the browser. Other libraries run the tests in a Node-process, which is connected to the browser through an API.

<details>
<summary>

First, install `cypress` to the frontend </summary>

```
npm install --save-dev cypress
```

and by adding an npm-script :

</details>

 <details>
 <summary>
Step 1
</summary>
Test the application display the login by default.
</details>

<h1 align="center"> $\textcolor{orange}{REDUX\ }$
</h1>

## $\color{cyan}{Part6}$

 <details>
 <summary>
Step 1
</summary>
Testing the Reduce method.
Install deep-freeze to ensure reducer has been correctly define as an immutable function.

```
npm install --save-dev deep-freeze
```

### To run individual test file : -

```
run test file :
```

```
npm test -- reducer/noteReducer.test.js`
```

### run specific test name or describe block name

- test name

```
npm test -- -t  "a specific note is within the returned notes"
```

- test describtion

```
  npm test -- -t 'notes'
```

</details>
