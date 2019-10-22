import Ext_TitleBar from './Ext/TitleBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTitlebar extends Ext_TitleBar {
    constructor() {
        super ([],[])
        this.xtype = 'titlebar';
    }
}
window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebar))
