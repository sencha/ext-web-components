import Ext_field_trigger_Menu from './Ext/field/trigger/Menu'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMenutriggerComponent extends Ext_field_trigger_Menu {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menutrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menutrigger', ExtMenutriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(ExtMenutriggerComponent))
