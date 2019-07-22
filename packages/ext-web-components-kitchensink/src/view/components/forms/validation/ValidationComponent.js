import './ValidationComponent.html';
Ext.require('Ext.data.validator.*');

export default class ValidationComponent {
    constructor() {
        console.log('in ValidationComponent constructor');
    }

    regexTestFieldReady = (event) => {
        const regexTestFieldCmp = event.detail.cmp;
        regexTestFieldCmp.setValidators({
            type: 'format',
            matcher: /^[A-Z]*$/,
            message: 'Only uppercase letters are allowed.'
        });
    }

    validateCapitalization = (value) => {
        const words = value.split(/\s+/);

        for (let word of words) {
            if (word.length && !word.match(/^[A-Z].*$/)) {
                return 'All words must be capitalized.';
            }
        }

        return true;
    }
}
