import Ext_panel_Title from './Ext/panel/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPaneltitle extends Ext_panel_Title {
    constructor() {
        super ([],[])
        this.xtype = 'paneltitle';
    }
}
window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitle))
