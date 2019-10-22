import Ext_SplitButton from './Ext/SplitButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSplitbutton extends Ext_SplitButton {
    constructor() {
        super ([],[])
        this.xtype = 'splitbutton';
    }
}
window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbutton))
