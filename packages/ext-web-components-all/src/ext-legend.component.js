import Ext_chart_Legend from './Ext/chart/Legend.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtLegendComponent extends Ext_chart_Legend {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'legend'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-legend', ExtLegendComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(ExtLegendComponent))
