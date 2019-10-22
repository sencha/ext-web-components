import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtActionsheet extends Ext_ActionSheet {
    constructor() {
        super ([],[])
        this.xtype = 'actionsheet';
    }
}
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(ExtActionsheet))
