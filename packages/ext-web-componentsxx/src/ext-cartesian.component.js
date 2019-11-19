import Ext_chart_Chart from './Ext/chart/Chart'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCartesianComponent extends Ext_chart_Chart {
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
//        window.customElements.define('ext-cartesian', ExtCartesianComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesianComponent))
