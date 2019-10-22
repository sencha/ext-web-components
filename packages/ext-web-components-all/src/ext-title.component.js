import Ext_Title from './Ext/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTitle extends Ext_Title {
    constructor() {
        super ([],[])
        this.xtype = 'title';
    }
}
window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitle))
