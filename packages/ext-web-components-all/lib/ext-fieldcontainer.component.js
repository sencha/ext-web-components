import Ext_field_Container_Component from './Ext/field/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFieldcontainerComponent extends Ext_field_Container_Component {
    constructor() {
        super ()
        this.xtype = 'fieldcontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldcontainer', ExtFieldcontainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-fieldcontainer', HTMLParsedElement.withParsedCallback(ExtFieldcontainerComponent))
