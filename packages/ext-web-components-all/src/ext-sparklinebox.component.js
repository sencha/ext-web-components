import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinebox extends Ext_sparkline_Box {
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
//        window.customElements.define('ext-sparklinebox', ExtSparklinebox);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklinebox))
//export default reactify(ExtSparklinebox);