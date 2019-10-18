import Ext_chart_PolarChart from './Ext/chart/PolarChart.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPolarComponent extends Ext_chart_PolarChart {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'polar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-polar', ExtPolarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(ExtPolarComponent))
