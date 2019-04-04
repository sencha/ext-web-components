import './ValidationComponent.html';
Ext.require("Ext.data.validator.*");

export default class ValidationComponent {

    constructor() {
        console.log('in ValidationComponent constructor');
    }

    validateCapitalization(value) {
        const words = value.split(/\s+/);

        for (let word of words) {
            if (word.length && !word.match(/^[A-Z].*$/)) {
                return 'All words must be capitalized.';
            }
        }

        return true;
    }
}

