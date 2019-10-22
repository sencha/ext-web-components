import Ext_form_Display from './Ext/form/Display.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDisplayfield extends Ext_form_Display {
    constructor() {
        super ([],[])
        this.xtype = 'displayfield';
    }
}
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfield))
