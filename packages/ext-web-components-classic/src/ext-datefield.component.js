//import Ext_form_Date from '@sencha/ext-runtime-base/dist/./Ext/form/Date.js';
import Ext_form_Date from './Ext/form/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatefield extends Ext_form_Date {
    constructor() {
        super ([], []);
        this.xtype = 'datefield';
    }

}
window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));

