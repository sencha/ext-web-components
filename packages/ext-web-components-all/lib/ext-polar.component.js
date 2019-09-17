import Ext_chart_PolarChart_Component from './Ext/chart/PolarChart'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPolarComponent extends Ext_chart_PolarChart_Component {
    constructor() {
        super ()
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
