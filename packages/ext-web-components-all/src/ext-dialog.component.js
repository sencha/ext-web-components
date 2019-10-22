import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDialog extends Ext_window_Window {
    constructor() {
        super ([],[])
        this.xtype = 'dialog';
    }
}
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialog))
