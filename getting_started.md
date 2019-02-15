# Getting Started with ExtComponents

## Overview

This guide will show you how to install and configure ExtComponents in your development environment.

## Requirements

ExtComponents requires the following to be installed before proceeding:

* [Node 8.11+](#getting_started_-_installing_node_and_npm)
* [NPM 6+](#getting_started_-_installing_node_and_npm)
* [Java 8](#getting_started_-_installing_java)

## Creating Your First ExtComponents Application

### Step 1a: Authenticate to Sencha's NPM Registry - early adopter

ExtComponents and all related packages are hosted on Sencha's private NPM registry. 

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

ExtComponents and all related packages are hosted on Sencha's private NPM registry. 

To gain access to this registry, [sign up for a trial of ExtComponents](https://www.sencha.com/products/extcomponents/evaluate).  

Once you have received your credentials, you can authenticate by running the following command:

```bash

npm login --registry=http://npm.sencha.com --scope=@sencha

```

This command configures npm to download packages in the `@sencha` scope from Sencha's registry.
*************

### Step 2: Create a New ExtComponents Application

If you are ...:

```
npm install -g @sencha/ext-components-gen
```
