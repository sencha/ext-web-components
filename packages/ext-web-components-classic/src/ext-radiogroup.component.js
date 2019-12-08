//import Ext_form_RadioGroup from '@sencha/ext-runtime-base/dist/./Ext/form/RadioGroup.js';
import Ext_form_RadioGroup from './Ext/form/RadioGroup.js';
import ElementParser from './ElementParser.js';

export default class EWCRadiogroup extends Ext_form_RadioGroup {
    constructor() {
        super ([], []);
        this.xtype = 'radiogroup';
    }

}
window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));

