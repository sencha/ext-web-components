import './ValidationComponent.html';
Ext.require('Ext.data.validator.*');

export default class ValidationComponent {

    regexTextFieldReady = (event) => {
        const regexTestFieldCmp = event.detail.cmp;
        regexTestFieldCmp.setValidators({
            type: 'format',
            matcher: /^[A-Z]*$/,
            message: 'Only uppercase letters are allowed.'
        });
    }

    customFunctionTextFieldReady = (event) => {
        const regexTestFieldCmp = event.detail.cmp;
        regexTestFieldCmp.setValidators(this.validateCapitalization.bind(this));
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
