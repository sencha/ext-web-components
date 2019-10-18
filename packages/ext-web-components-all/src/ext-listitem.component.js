import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtListitemComponent extends Ext_dataview_component_ListItem {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'listitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listitem', ExtListitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listitem', HTMLParsedElement.withParsedCallback(ExtListitemComponent))
