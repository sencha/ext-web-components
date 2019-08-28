import Ext_d3_hierarchy_partition_Sunburst_Component from './Ext/d3/hierarchy/partition/Sunburst'

export class ExtD3_sunburstComponent extends Ext_d3_hierarchy_partition_Sunburst_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-sunburst', ExtD3_sunburstComponent);
    });
})();
