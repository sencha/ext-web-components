import Ext_field_FieldGroupContainer_Component from './Ext/field/FieldGroupContainer'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGroupcontainerComponent extends Ext_field_FieldGroupContainer_Component {
    constructor() {
        super ()
        this.xtype = 'groupcontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-groupcontainer', ExtGroupcontainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(ExtGroupcontainerComponent))
