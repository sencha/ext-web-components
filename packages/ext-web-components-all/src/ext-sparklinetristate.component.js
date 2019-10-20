import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinetristate extends Ext_sparkline_TriState {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklinetristate'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinetristate', ExtSparklinetristate);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(ExtSparklinetristate))
//export default reactify(ExtSparklinetristate);