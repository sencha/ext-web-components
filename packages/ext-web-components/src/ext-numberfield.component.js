//import Ext_form_Number from '@sencha/ext-runtime-base/dist/./Ext/form/Number.js';
import Ext_form_Number from './Ext/form/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCNumberfield extends Ext_form_Number {
    constructor() {
        super ([], []);
        this.xtype = 'numberfield';
    }

}
window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(EWCNumberfield));

