import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinebar extends Ext_sparkline_Bar {
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
//        window.customElements.define('ext-sparklinebar', ExtSparklinebar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(ExtSparklinebar))
//export default reactify(ExtSparklinebar);