//import Ext_form_FormPanel from '@sencha/ext-runtime-base/dist/./Ext/form/FormPanel.js';
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFormpanel extends Ext_form_FormPanel {
    constructor() {
        super ([], []);
        this.xtype = 'formpanel';
    }

}
window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(EWCFormpanel));

