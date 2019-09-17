import Ext_chart_Legend_Component from './Ext/chart/Legend'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLegendComponent extends Ext_chart_Legend_Component {
    constructor() {
        super ()
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
