import Ext_window_Window from './Ext/window/Window.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDialogComponent extends Ext_window_Window {
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
//        window.customElements.define('ext-dialog', ExtDialogComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialogComponent))
