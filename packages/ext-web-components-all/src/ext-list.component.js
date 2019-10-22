import Ext_List from './Ext/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtList extends Ext_List {
    constructor() {
        super ([],[])
        this.xtype = 'list';
    }
}
window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(ExtList))
