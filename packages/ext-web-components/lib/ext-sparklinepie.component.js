import Ext_sparkline_Pie_Component from './Ext/sparkline/Pie'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinepieComponent extends Ext_sparkline_Pie_Component {
    constructor() {
        super (
            {},
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
