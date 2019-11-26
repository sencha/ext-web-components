//import Ext_form_Search from '@sencha/ext-runtime-base/dist/./Ext/form/Search.js';
import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSearchfield extends Ext_form_Search {
    constructor() {
        super ([], []);
        this.xtype = 'searchfield';
    }

}
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(EWCSearchfield));

