import Ext_dataview_component_SimpleListItem_Component from './Ext/dataview/component/SimpleListItem'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSimplelistitemComponent extends Ext_dataview_component_SimpleListItem_Component {
    constructor() {
        super ()
        this.xtype = 'simplelistitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-simplelistitem', ExtSimplelistitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(ExtSimplelistitemComponent))
