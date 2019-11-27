//import Ext_form_Email from '@sencha/ext-runtime-base/dist/./Ext/form/Email.js';
import Ext_form_Email from './Ext/form/Email.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCEmailfield extends Ext_form_Email {
    constructor() {
        super ([], []);
        this.xtype = 'emailfield';
    }

}
window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(EWCEmailfield));

