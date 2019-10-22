import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtButton extends Ext_Button {
    constructor() {
        super ([],[])
        this.xtype = 'button';
    }
}
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButton))
