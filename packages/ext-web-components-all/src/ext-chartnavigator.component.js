import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtChartnavigator extends Ext_chart_navigator_Container {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'chartnavigator'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chartnavigator', ExtChartnavigator);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigator))
//export default reactify(ExtChartnavigator);