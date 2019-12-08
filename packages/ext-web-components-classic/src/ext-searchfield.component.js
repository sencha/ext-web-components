//import Ext_ux_form_SearchField from '@sencha/ext-runtime-base/dist/./Ext/ux/form/SearchField.js';
import Ext_ux_form_SearchField from './Ext/ux/form/SearchField.js';
import ElementParser from './ElementParser.js';

export default class EWCSearchfield extends Ext_ux_form_SearchField {
    constructor() {
        super ([], []);
        this.xtype = 'searchfield';
    }

}
window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));

