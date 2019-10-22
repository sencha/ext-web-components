import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRadio extends Ext_form_Radio {
    constructor() {
        super ([],[])
        this.xtype = 'radio';
    }
}
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(ExtRadio))
