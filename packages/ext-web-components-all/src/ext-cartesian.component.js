import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCartesian extends Ext_chart_Chart {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'cartesian'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-cartesian', ExtCartesian);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesian))
//export default reactify(ExtCartesian);