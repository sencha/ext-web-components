import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDataitemComponent extends Ext_dataview_component_DataItem {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'dataitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataitem', ExtDataitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(ExtDataitemComponent))
