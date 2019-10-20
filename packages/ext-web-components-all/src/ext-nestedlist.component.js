import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtNestedlist extends Ext_NestedList {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'nestedlist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-nestedlist', ExtNestedlist);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlist))
//export default reactify(ExtNestedlist);