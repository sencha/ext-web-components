import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSimplelistitem extends Ext_dataview_component_SimpleListItem {
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
//        window.customElements.define('ext-simplelistitem', ExtSimplelistitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(ExtSimplelistitem))
//export default reactify(ExtSimplelistitem);