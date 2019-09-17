import Ext_sparkline_Bar_Component from './Ext/sparkline/Bar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinebarComponent extends Ext_sparkline_Bar_Component {
    constructor() {
        super ()
        this.xtype = 'sparklinebar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebar', ExtSparklinebarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(ExtSparklinebarComponent))
