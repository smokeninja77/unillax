# Unillax
__Unillax__ is a JavaScript library for websites that adds universal parallax effects to any element. __Unillax__ is able to handle background and foreground effects with any standard HTML elements, making it universal and easy to implament for many projets.



## Table of Contents
- [Unillax](#unillax)
  * [Table of Contents](#table-of-contents)
  * [Installing](#installing)
    + [Prerequisites](#prerequisites)
    + [Installing the Package](#installing-the-package)
  * [Using Unillax](#using-unillax)
    + [Including the script](#including-the-script)
    + [Adding containers](#adding-containers)
      - [Basic](#basic)
      - [Backgrounds](#backgrounds)
    + [Adding elements](#adding-elements)
    + [Controlling speed and depth](#controlling-speed-and-depth)
    + [Controlling position](#controlling-position)
  * [Local Development](#local-development)
    + [Cloning the Repository](#cloning-the-repository)
    + [Linking to a test project](#linking-to-a-test-project)
  * [Contributing](#contributing)
    + [Bugs](#bugs)
    + [Feature Requests](#feature-requests)
    + [Pull Requests](#pull-requests)
  * [Licence](#licence)


## Installing
### Prerequisites
* [Node.js v12.8.1](https://nodejs.org/dist/v12.8.1/ "Index of /dist/v12.8.1/") or higher
* npm v6.10.2 or higher (Comes with [Node.js](https://nodejs.org/ "Node.js"))

Ensure you are running [Node.js v12.8.1](https://nodejs.org/dist/v12.8.1/ "Index of /dist/v12.8.1/") or higher and npm v6.10.2 or higer before installing the package.
```shell
$ node -v
$ npm -v
```
### Installing the Package
To install the package, set your working directory to the root of your project and install the npm module.
```shell
$ cd my-project-directory
$ npm install unillax
```

## Using Unillax
### Including the script
Implamenting Unillax into your website is easy. Simply include the JavaScript script in your HTML.
``` html
<script src="/node_modules/unillax/releases/unillax-min.js"></script>
```
### Adding containers
#### Basic
Unillax conatiners are elements that have parallax elements inside of them. These are mostly used as background elements. To add a Unillax container, use the class `unillax-container` on the container you want to use. The elements inside the container will automaticly gain the parallax effect. [See the basic example](/demos/basic-container.html).
```html
<div class="unillax-container" style="height: 400px;">
    <h1>Title</h1>
    <p>Content</p>
    ...
</div>
```
#### Backgrounds
Additionally, Unillax supports backgrounds to make a background image parallax effect. To do this, include an `<img>` tag at the top of your container with the `unillax-background` class. Then, wrap your content in a container using the `unillax-overlay` class. See [the background example](/demos/basic-background-container.html).
```html
<div class="unillax-container" style="height: 400px;">
    <img src="/images/background.jpg" class="unillax-background">
    <div>
        <h1>Title</h1>
        <p>Content</p>
        ...
    </div>
</div>
```
### Adding elements
Unillax elments float above all other elements and are not restricted to being inside of a container. They can appear to be above or below elements. See [the element example](/demos/basic-element.html).
```html
<h1 class="unillax-element" data-unillax-depth="-8">I move faster than other elements.</h1>
<h1 class="unillax-element">I move slower than other elements.</h1>
```
### Controlling speed and depth
To customize the speed of elements, use the HTML attribute `data-unillax-depth`. Values at 0 indicate no parralax effect, positive values are further from the viewport, and negitave values are towards the viewport. This means that positive values move slower and negitave values move faster.
### Controlling position
By default, elements will reach a "centered" position at the top of the page. To change this, use the `data-unillax-position` attribute. The allowed values are `top`, `middle`, and `bottom`. This controls the position relative to the viewport where paralalx elements will center.


## Local Development
The following instructions will describe how to install __Unillax__ on your loacal machine for development or contributing. If you wish to only use __Unillax__ in your projects, and not contribute, I would [recomend installing the npm package](#Installing "Installing").
### Cloning the Repository
Clone the repository onto a local file path and set the current working directory to `unillax`. After this, feel free to make changes
```shell
$ git clone https://github.com/devision1088/unillax.git
$ cd unillax
```
### Linking to a test project
To develop __Unillax__, we will link the clones npm module to a test HTML project. First, set your working directory to your cloned version of __Unillax__ and set up npm linking.
```shell
$ npm link
```
Then, set your working directory to the test project you want to test Unillax on. Configure this project to have it's npm module update based on the local clone of __Unillax__.
```shell
$ npm link unillax
```


## Contributing
Be sure to [read the Contributor Covenant Code of Conduct](https://github.com/devision1088/unillax/blob/master/CODE_OF_CONDUCT.md) before making a bug report, feature request, or pull request to help create a welcoming environment.
### Bugs
If you have found a bug with Unillax, [create a bug report](https://github.com/devision1088/unillax/issues/new?assignees=&labels=bug&template=bug_report.md&title=). In the bug report please describe the bug, add steps to reproduce, explain expected behavior, attach screenshots, and state the platform. This helps us quickly identify and fix the bug.
### Feature Requests
If you have an idea for a feature and would like to put it up for development [create a feature request](https://github.com/devision1088/unillax/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=). To reduce the time of developing a new feature, please include information if the feature is related to an issue, a complete description of the solution, and alternatives to the solution.
### Pull Requests
To contribute, fork the repository and [create a pull request](https://github.com/devision1088/unillax/compare). When creating a pull request, please describe the changes made and explain the reasons for the changes to help quickly identify when to merge pull requests.


## Licence
[MIT](https://github.com/devision1088/unillax/blob/master/LICENSE)
