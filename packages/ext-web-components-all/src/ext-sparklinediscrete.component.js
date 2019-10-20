import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinediscrete extends Ext_sparkline_Discrete {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklinediscrete'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscrete);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscrete))
//export default reactify(ExtSparklinediscrete);