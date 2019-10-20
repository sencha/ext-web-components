import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtListitem extends Ext_dataview_component_ListItem {
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
//        window.customElements.define('ext-listitem', ExtListitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listitem', HTMLParsedElement.withParsedCallback(ExtListitem))
//export default reactify(ExtListitem);