import Ext_chart_navigator_Container_Component from './Ext/chart/navigator/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtChartnavigatorComponent extends Ext_chart_navigator_Container_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'chartnavigator'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chartnavigator', ExtChartnavigatorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigatorComponent))
