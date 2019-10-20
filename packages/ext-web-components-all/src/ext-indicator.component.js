import Ext_Indicator from './Ext/Indicator.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtIndicator extends Ext_Indicator {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'indicator'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indicator', ExtIndicator);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(ExtIndicator))
//export default reactify(ExtIndicator);