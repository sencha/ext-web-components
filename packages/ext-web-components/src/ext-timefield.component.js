import Ext_field_Time from './Ext/field/Time'
import HTMLParsedElement from './HTMLParsedElement'

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
