import Ext_d3_hierarchy_partition_Partition_Component from './Ext/d3/hierarchy/partition/Partition'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_partitionComponent extends Ext_d3_hierarchy_partition_Partition_Component {
    constructor() {
        super ()
        this.xtype = 'd3-partition'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-partition', ExtD3_partitionComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-partition', HTMLParsedElement.withParsedCallback(ExtD3_partitionComponent))
