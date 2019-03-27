# ext-components-gen
A code generator for Ext-Components applications.

## Installation

Install [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g @sencha/ext-components-gen
```

## Creating a new ext-components-gen App

If you haven't already, log into Sencha's private registry using the credentials you received in your Ext Components trial or subscription activation email. If you don't have credentials, you can get them by [signing up for a trial of Ext Components](https://www.sencha.com/products/extcomponents/evaluate/).

```bash
npm login --registry=http://npm.sencha.com --scope=@sencha
```

Then, to create a new ext-components-gen app, run:

```bash
ext-w-gen MyCoolExtAngularApp
```

## Development

To make changes to the generator, run:

```bash
git clone git@github.com:sencha/ext-components.git
cd ext-components
npm install
cd packages/ext-components-gen
npm link
```

Now `ext-components-gen` will use your local copy of the generator.

## License

MIT © [Sencha, Inc.](https://www.sencha.com/)
