import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPolar extends Ext_chart_PolarChart {
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
//        window.customElements.define('ext-polar', ExtPolar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(ExtPolar))
//export default reactify(ExtPolar);