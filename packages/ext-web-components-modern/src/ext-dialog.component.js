//import Ext_window_Window from '@sencha/ext-runtime-base/dist/./Ext/window/Window.js';
import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDialog extends Ext_window_Window {
    constructor() {
        super ([], []);
        this.xtype = 'dialog';
    }

}
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(EWCDialog));

