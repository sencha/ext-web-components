import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinepie extends Ext_sparkline_Pie {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklinepie'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinepie', ExtSparklinepie);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepie))
//export default reactify(ExtSparklinepie);