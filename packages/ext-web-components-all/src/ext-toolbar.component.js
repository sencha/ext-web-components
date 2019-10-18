import Ext_Toolbar from './Ext/Toolbar.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtToolbarComponent extends Ext_Toolbar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'toolbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toolbar', ExtToolbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(ExtToolbarComponent))
