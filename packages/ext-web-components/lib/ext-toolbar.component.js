import Ext_Toolbar_Component from './Ext/Toolbar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtToolbarComponent extends Ext_Toolbar_Component {
    constructor() {
        super (
            {},
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
