//import Ext_form_Text from '@sencha/ext-runtime-base/dist/./Ext/form/Text.js';
import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTextfield extends Ext_form_Text {
    constructor() {
        super ([], []);
        this.xtype = 'textfield';
    }

}
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(EWCTextfield));

