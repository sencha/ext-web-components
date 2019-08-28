import Ext_d3_hierarchy_partition_Partition_Component from './Ext/d3/hierarchy/partition/Partition'

export class ExtD3_partitionComponent extends Ext_d3_hierarchy_partition_Partition_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-partition', ExtD3_partitionComponent);
    });
})();
