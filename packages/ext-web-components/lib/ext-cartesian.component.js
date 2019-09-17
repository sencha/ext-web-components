import Ext_chart_Chart_Component from './Ext/chart/Chart'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCartesianComponent extends Ext_chart_Chart_Component {
    constructor() {
        super (
            {},
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
