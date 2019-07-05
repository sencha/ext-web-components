# ExtWebComponents Boilerplate

## Overview

This guide will show you how to install and configure ExtWebComponents in your development environment.

## Requirements

ExtWebComponents requires the following to be installed before proceeding:

* [Node 8.10+](#getting_started_-_installing_node_and_npm)
* [NPM 6+](#getting_started_-_installing_node_and_npm)
* [Java 8](#getting_started_-_installing_java)

Also you can find the documents related to system configuration [ExtWebComponents](https://docs.sencha.com/extwebcomponents/7.0.0/guides/getting_started.html)

## Quick Start

ExtWebComponets and all related packages are hosted on Sencha's private NPM registry. To gain access to this registry, [sign up for a trial of ExtReact](https://www.sencha.com/products/extwebcomponents/evaluate/earlyaccess/).

Once you have received your credentials, you can authenticate by running the following command:

```
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

Then, run the following to clone and build the project:

    git clone https://github.com/sencha/ext-web-components.git
    cd ./ext-web-components
    npm install
    cd ./packages/ext-web-components-boilerplate
    npm start

This will start the app and open it in a browser window.  By default it tries to find
an open port starting with 1962.  You can override the default port by providing `--env.port=(port)`
as a command line argument.

For example to use port 1963:

    npm start -- --env.port=1963

You can also run and serve a production build using:

    npm run build
    npm run prod
