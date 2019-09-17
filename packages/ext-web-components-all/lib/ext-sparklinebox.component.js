import Ext_sparkline_Box_Component from './Ext/sparkline/Box'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklineboxComponent extends Ext_sparkline_Box_Component {
    constructor() {
        super ()
        this.xtype = 'sparklinebox'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebox', ExtSparklineboxComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklineboxComponent))
