//import Ext_form_Select from '@sencha/ext-runtime-base/dist/./Ext/form/Select.js';
import Ext_form_Select from './Ext/form/Select.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSelectfield extends Ext_form_Select {
    constructor() {
        super ([], []);
        this.xtype = 'selectfield';
    }

}
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(EWCSelectfield));

