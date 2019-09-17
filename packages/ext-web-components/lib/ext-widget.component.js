import Ext_Gadget_Component from './Ext/Gadget'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtWidgetComponent extends Ext_Gadget_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'widget'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-widget', ExtWidgetComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidgetComponent))
