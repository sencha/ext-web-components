import Ext_d3_hierarchy_partition_Sunburst_Component from './Ext/d3/hierarchy/partition/Sunburst'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_sunburstComponent extends Ext_d3_hierarchy_partition_Sunburst_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'd3-sunburst'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-sunburst', ExtD3_sunburstComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-sunburst', HTMLParsedElement.withParsedCallback(ExtD3_sunburstComponent))
