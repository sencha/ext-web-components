import Ext_sparkline_Box from './Ext/sparkline/Box.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSparklineboxComponent extends Ext_sparkline_Box {
    constructor() {
        super (
            [],
            []
        )
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
