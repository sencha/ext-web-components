import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDialog extends Ext_window_Window {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'dialog'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dialog', ExtDialog);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialog))
//export default reactify(ExtDialog);