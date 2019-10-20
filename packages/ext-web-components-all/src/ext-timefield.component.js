import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTimefield extends Ext_field_Time {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'timefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timefield', ExtTimefield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefield))
//export default reactify(ExtTimefield);