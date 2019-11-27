//import Ext_form_Display from '@sencha/ext-runtime-base/dist/./Ext/form/Display.js';
import Ext_form_Display from './Ext/form/Display.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDisplayfield extends Ext_form_Display {
    constructor() {
        super ([], []);
        this.xtype = 'displayfield';
    }

}
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(EWCDisplayfield));

