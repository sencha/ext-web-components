//import Ext_form_Hidden from '@sencha/ext-runtime-base/dist/./Ext/form/Hidden.js';
import Ext_form_Hidden from './Ext/form/Hidden.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCHiddenfield extends Ext_form_Hidden {
    constructor() {
        super ([], []);
        this.xtype = 'hiddenfield';
    }

}
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(EWCHiddenfield));

