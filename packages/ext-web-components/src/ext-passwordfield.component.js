//import Ext_form_Password from '@sencha/ext-runtime-base/dist/./Ext/form/Password.js';
import Ext_form_Password from './Ext/form/Password.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPasswordfield extends Ext_form_Password {
    constructor() {
        super ([], []);
        this.xtype = 'passwordfield';
    }

}
window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(EWCPasswordfield));

