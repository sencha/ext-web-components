import Ext_sparkline_Line_Component from './Ext/sparkline/Line'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinelineComponent extends Ext_sparkline_Line_Component {
    constructor() {
        super ()
        this.xtype = 'sparklineline'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklineline', ExtSparklinelineComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklinelineComponent))
