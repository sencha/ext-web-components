import Ext_field_Input from './Ext/field/Input.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtInputfield extends Ext_field_Input {
    constructor() {
        super ([],[])
        this.xtype = 'inputfield';
    }
}
window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfield))
