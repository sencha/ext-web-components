import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivottreemap extends Ext_pivot_d3_TreeMap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivottreemap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivottreemap', ExtPivottreemap);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivottreemap', HTMLParsedElement.withParsedCallback(ExtPivottreemap))
//export default reactify(ExtPivottreemap);