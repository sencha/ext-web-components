//import Ext_form_Toggle from '@sencha/ext-runtime-base/dist/./Ext/form/Toggle.js';
import Ext_form_Toggle from './Ext/form/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTogglefield extends Ext_form_Toggle {
    constructor() {
        super ([], []);
        this.xtype = 'togglefield';
    }

}
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(EWCTogglefield));

