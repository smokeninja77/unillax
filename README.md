# Unillax
__Unillax__ is a JavaScript library for websites that adds universal parallax effects to any element. __Unillax__ is able to handle background and foreground effects with any standard HTML elements, making it universal and easy to implament for many projets.

## Installing
### Prerequisites
* [Node.js v12.8.1](https://nodejs.org/dist/v12.8.1/ "Index of /dist/v12.8.1/")
* npm v6.10.2 (Comes with [Node.js](https://nodejs.org/ "Node.js"))

Ensure you are running [Node.js v12.8.1](https://nodejs.org/dist/v12.8.1/ "Index of /dist/v12.8.1/") or higher and npm v6.10.2 or higer before installing the package.
```
$ node -v
$ npm -v
```
### Installing the Package
To install the package, set your working directory to the root of your project and install the npm module.
```
$ npm install unillax
```
## Local Development
The following instructions will describe how to install __Unillax__ on your loacal machine for development or contributing. If you wish to only use __Unillax__ in your projects, and not contribute, I would [recomend installing the npm package](#Installing "Installing").
### Cloning the Repository
Clone the repository onto a local file path and set the current working directory to `unillax`. After this, feel free to make changes
```
$ git clone https://github.com/devision1088/unillax.git
$ cd unillax
```
### Linking to a test project
To develop __Unillax__, we will link the clones npm module to a test HTML project. First, set your working directory to your cloned version of __Unillax__ and set up npm linking.
```
$ npm link
```
Then, set your working directory to the test project you want to test Unillax on. Configure this project to have it's npm module update based on the local clone of __Unillax__.
```
$ npm link unillax
```
## Contributing
Be sure to [read the Contributor Covenant Code of Conduct](https://github.com/devision1088/unillax/blob/master/CODE_OF_CONDUCT.md) before making a bug report, feature request, or pull request to help create a welcoming environment.
### Bugs
If you have found a bug with Platforms, [create a bug report](https://github.com/devision1088/unillax/issues/new?assignees=&labels=bug&template=bug_report.md&title=). In the bug report please describe the bug, add steps to reproduce, explain expected behavior, attach screenshots, and state platform. This helps us quickly identify and fix the bug.
### Feature Requests
If you have an idea for a feature and would like to put it up for development [create a feature request](https://github.com/devision1088/unillax/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=). To reduce the time of developing a new feature, please include information if the feature is related to an issue, a complete description of the solution, and alternatives to the solution.
### Pull Requests
To contribute, fork the repository and [create a pull request](https://github.com/devision1088/unillax/compare). When creating a pull request, please describe the changes made and explain the reasons for the changes to help quickly identify when to merge pull requests.
## Licence
[MIT](https://github.com/devision1088/unillax/blob/master/LICENSE)
