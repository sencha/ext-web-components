import Ext_window_Window_Component from './Ext/window/Window'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDialogComponent extends Ext_window_Window_Component {
    constructor() {
        super (
            {},
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
