//import Ext_form_TextArea from '@sencha/ext-runtime-base/dist/./Ext/form/TextArea.js';
import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './ElementParser.js';

export default class EWCTextarea extends Ext_form_TextArea {
    constructor() {
        super ([], []);
        this.xtype = 'textarea';
    }

}
window.customElements.define('ext-textarea', ElementParser.withParsedCallback(EWCTextarea));

