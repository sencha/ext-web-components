import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtBoundlist extends Ext_dataview_BoundList {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'boundlist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-boundlist', ExtBoundlist);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlist))
//export default reactify(ExtBoundlist);