# Sencha ExtWebComponents - Getting Started

## Release Notes

### 7.0.0

## Overview

This guide will show you how to install and configure ExtWebComponents in your development environment.

## Requirements

ExtWebComponent requires the following to be installed before proceeding:

* [Node 8.10+](#getting_started_-_installing_node_and_npm){:target="_blank"}
* [NPM 6+](#getting_started_-_installing_node_and_npm)
* [Java 8](#getting_started_-_installing_java)

## Creating Your First ExtWebComponents Application

### Step 1a: Authenticate to Sencha's NPM Registry - early adopter

ExtWebComponents and all related packages are hosted on Sencha's private NPM registry.

To gain access to the early adopter registry, contact Sencha Sales.

Once you have received your credentials from sales for the early adopter registry,
you can authenticate by running the following command:

```bash
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

This command configures npm to download packages in the `@sencha` scope from Sencha's registry.

### Step 1b: Authenticate to Sencha's NPM Registry - Production (not available yet)


*************
When this product is in production...

ExtWebComponents and all related packages are hosted on Sencha's private NPM registry.

To gain access to this registry, [sign up for a trial of ExtWebComponent](https://www.sencha.com/products/extwebcomponents/evaluate).  

Once you have received your credentials, you can authenticate by running the following command:

```bash

npm login --registry=http://npm.sencha.com --scope=@sencha

```

This command configures npm to download packages in the `@sencha` scope from Sencha's registry.
*************



### Step 2: Install ext-web-components-gen

First, if you have not already done so, install [npm](https://www.npmjs.com/) (also, we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g @sencha/ext-web-components-gen
```

### Step 3: Create a starter ExtWebComponents application with ext-web-components-gen

Generate an initial application with ext-web-components-gen

```bash
ext-web-components-gen app MyCoolWebExtWebComponentsApp
```

This will create a folder for your new application and install all npm packages

### Step 4: Run the newly created starter ExtWebComponents application

When the install is finished:

type "cd MyCoolWebExtWebComponentsApp" then "npm start" to run the development build and open your new application in a web browser
(for the current early adopter release, you need to run 'npm start' twice for the app to display)

```
npm install
npm start (let it get to this: ℹ ｢wdm｣: Compiled successfully.)
control-c (stop the command)
npm start
```

The resulting app uses webpack-dev-server and hot-loading. Any changes you make will be immediately reflected in the browser.

## Example Applications

The [ext-web-components repo on GitHub](https://github.com/sencha/ext-web-components) contains several example apps that you can use to learn more about ExtWebComponents.  Each has a readme that contains instructions for downloading and running:

* [ext-web-components-kitchensink](https://github.com/sencha/ext-web-components/tree/ext-components-7.0.x/packages/ext-web-components-kitchensink) - Shows how to use every ExtWebComponents. See it running [here](https://examples.sencha.com/ExtWebComponents/7.0.0/kitchensink/).
[ext-web-components-conference-app](https://github.com/sencha/ext-web-components/tree/ext-components-7.0.x/packages/ext-web-components-conference-app) - ExtWebComponents Conference Application Sample. See it running [here](https://examples.sencha.com/ExtWebComponents/7.0.0/conference-app/#Schedule).

## Appendix

### Installing Node and NPM

You can check the version of node you have installed by running:

```
node --version
```

 To install node on Mac OS and Linux, we recommend using [nvm](https://github.com/creationix/nvm#installation).  If you already have nvm installed, you can install the latest stable version of Node and NPM using:

 ```
 nvm install stable
 ```

 On Windows you can use the [official installer](https://nodejs.org/en/download/).  There is also a version of [nvm for Windows](https://github.com/coreybutler/nvm-windows)

### Installing Java

In order to install Ext's webpack plugin on Linux, Java 8 must first be installed.

You can check which version of Java you have installed by running:

```
java -version
```

On Debian-based platforms, you can install OpenJDK using:

```
sudo apt-get install openjdk-8-jdk
```

... or you can install Oracle's JDK using:

```
sudo add-apt-repository ppa:webupd8team/java -y
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
