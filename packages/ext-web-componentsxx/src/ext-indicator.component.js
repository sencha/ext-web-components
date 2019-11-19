import Ext_Indicator from './Ext/Indicator'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtIndicatorComponent extends Ext_Indicator {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'indicator'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indicator', ExtIndicatorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(ExtIndicatorComponent))
