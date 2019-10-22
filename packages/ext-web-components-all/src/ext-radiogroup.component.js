import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRadiogroup extends Ext_field_RadioGroup {
    constructor() {
        super ([],[])
        this.xtype = 'radiogroup';
    }
}
window.customElements.define('ext-radiogroup', HTMLParsedElement.withParsedCallback(ExtRadiogroup))
