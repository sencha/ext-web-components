//import Ext_window_Window from '@sencha/ext-runtime-base/dist/./Ext/window/Window.js';
import Ext_window_Window from './Ext/window/Window.js';
import ElementParser from './ElementParser.js';

export default class EWCWindow extends Ext_window_Window {
    constructor() {
        super ([], []);
        this.xtype = 'window';
    }

}
window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));

