//import Ext_form_FormPanel from '@sencha/ext-runtime-base/dist/./Ext/form/FormPanel.js';
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCForm extends Ext_form_FormPanel {
    constructor() {
        super ([], []);
        this.xtype = 'form';
    }

}
window.customElements.define('ext-form', ElementParser.withParsedCallback(EWCForm));

