import Ext_chart_Legend from './Ext/chart/Legend.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtLegend extends Ext_chart_Legend {
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
//        window.customElements.define('ext-legend', ExtLegend);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(ExtLegend))
//export default reactify(ExtLegend);