import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSimplelistitemComponent extends Ext_dataview_component_SimpleListItem {
    constructor() {
        super (
            [],
            []
        )
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
