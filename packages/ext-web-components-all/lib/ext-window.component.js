import Ext_window_Window_Component from './Ext/window/Window'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtWindowComponent extends Ext_window_Window_Component {
    constructor() {
        super ()
        this.xtype = 'window'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-window', ExtWindowComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-window', HTMLParsedElement.withParsedCallback(ExtWindowComponent))
