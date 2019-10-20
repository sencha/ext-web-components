import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtD3_sunburst extends Ext_d3_hierarchy_partition_Sunburst {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-sunburst'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-sunburst', ExtD3_sunburst);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-sunburst', HTMLParsedElement.withParsedCallback(ExtD3_sunburst))
//export default reactify(ExtD3_sunburst);