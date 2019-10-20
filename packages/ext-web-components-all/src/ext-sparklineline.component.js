import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklineline extends Ext_sparkline_Line {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklineline'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklineline', ExtSparklineline);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklineline))
//export default reactify(ExtSparklineline);