# Ext-Web-Components-Gen
A code generator for Ext-Web-Components applications.

## Installation

Install [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g @sencha/ext-web-components-gen
```

## Creating a new ext-components-gen App

If you haven't already, log into Sencha's private registry using the credentials you received in your Ext Components trial or subscription activation email. If you don't have credentials, you can get them by [signing up for a trial of Ext Components](https://www.sencha.com/products/extwebcomponents/evaluate/earlyaccess/).

```
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

Then, to create a new ext-components-gen app, run:

```bash
ext-web-components-gen app MyCoolWebExtWebComponentsApp
```

## Development

To make changes to the generator, run:

```bash
git clone https://github.com/sencha/ext-web-components.git
cd ./ext-web-components
npm install
cd packages/ext-components-gen
npm link
```

Now `ext-components-gen` will use your local copy of the generator.

## License

MIT © [Sencha, Inc.](https://www.sencha.com/)
