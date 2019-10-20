import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDataitem extends Ext_dataview_component_DataItem {
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
//        window.customElements.define('ext-dataitem', ExtDataitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(ExtDataitem))
//export default reactify(ExtDataitem);