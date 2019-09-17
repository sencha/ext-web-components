import Ext_pivot_d3_TreeMap_Component from './Ext/pivot/d3/TreeMap'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivottreemapComponent extends Ext_pivot_d3_TreeMap_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'pivottreemap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivottreemap', ExtPivottreemapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivottreemap', HTMLParsedElement.withParsedCallback(ExtPivottreemapComponent))
