# ExtWebComponents KitchenSink

## Overview

This guide will show you how to install and configure ExtWebComponents in your development environment.

## Requirements

ExtWebComponents requires the following to be installed before proceeding:

* [Node 8.11+](#getting_started_-_installing_node_and_npm)
* [NPM 6+](#getting_started_-_installing_node_and_npm)
* [Java 8](#getting_started_-_installing_java)

Also you can find the doc related to system configuration [ExtWebComponents](https://docs.sencha.com/extwebcomponents/7.0.0/guides/getting_started.html)

All the ExtWebComponents Example hosted on [ExtWebComponents Kitchensink Example](https://examples.sencha.com/ExtWebComponents/7.0.0/kitchensink/).

## Running

ExtWebComponents and all related packages are hosted on Sencha's private NPM registry. To gain access to this registry, [sign up for a trial of ExtWebComponents](https://www.sencha.com/products/extwebcomponents/evaluate/earlyaccess/).

Once you have received your credentials, you can authenticate by running the following command:

```
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

Then, run the following to build and launch the app:

```
  git clone https://github.com/sencha/ext-web-components.git
  cd ./ext-web-components
  npm install
  cd ./ext-web-components-kitchensink
  npm start
```

You can view the app by pointing your browser to [http://localhost:1962](http://localhost:1962)

# Running against a local copy of the SDK repo

1. `git clone git@github.com:sencha/ext-web-components.git`
2. `npm install`
3. `cd packages/ext-web-components-kitchensink`
4. `ln -s /path/to/ExtJS ext` - or, for Windows: `mklink ext /path/to/ExtJS`
5. `npm run local`
