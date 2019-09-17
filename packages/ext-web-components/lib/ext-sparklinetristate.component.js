import Ext_sparkline_TriState_Component from './Ext/sparkline/TriState'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinetristateComponent extends Ext_sparkline_TriState_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'sparklinetristate'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinetristate', ExtSparklinetristateComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(ExtSparklinetristateComponent))
