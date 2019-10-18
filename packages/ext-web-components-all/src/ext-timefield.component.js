import Ext_field_Time from './Ext/field/Time.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTimefieldComponent extends Ext_field_Time {
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
//        window.customElements.define('ext-timefield', ExtTimefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(ExtTimefieldComponent))
