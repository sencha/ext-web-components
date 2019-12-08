//import Ext_form_Hidden from '@sencha/ext-runtime-base/dist/./Ext/form/Hidden.js';
import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './ElementParser.js';

export default class EWCHidden extends Ext_form_Hidden {
    constructor() {
        super ([], []);
        this.xtype = 'hidden';
    }

}
window.customElements.define('ext-hidden', ElementParser.withParsedCallback(EWCHidden));

