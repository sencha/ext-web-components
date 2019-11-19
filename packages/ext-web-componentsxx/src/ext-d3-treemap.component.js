import Ext_d3_hierarchy_TreeMap from './Ext/d3/hierarchy/TreeMap'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_treemapComponent extends Ext_d3_hierarchy_TreeMap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-treemap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-treemap', ExtD3_treemapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-treemap', HTMLParsedElement.withParsedCallback(ExtD3_treemapComponent))
