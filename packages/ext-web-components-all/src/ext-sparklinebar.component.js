import Ext_sparkline_Bar from './Ext/sparkline/Bar.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSparklinebarComponent extends Ext_sparkline_Bar {
    constructor() {
        super (
            [],
            []
        )
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
