import Ext_sparkline_Pie from './Ext/sparkline/Pie'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinepieComponent extends Ext_sparkline_Pie {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklinepie'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinepie', ExtSparklinepieComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepieComponent))
