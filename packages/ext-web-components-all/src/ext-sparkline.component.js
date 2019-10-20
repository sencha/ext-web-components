import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparkline extends Ext_sparkline_Base {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparkline'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparkline', ExtSparkline);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(ExtSparkline))
//export default reactify(ExtSparkline);