import Ext_dataview_component_ListItem_Component from './Ext/dataview/component/ListItem'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtListitemComponent extends Ext_dataview_component_ListItem_Component {
    constructor() {
        super (
            {},
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
