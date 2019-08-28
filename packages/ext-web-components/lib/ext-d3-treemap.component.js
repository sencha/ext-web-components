import Ext_d3_hierarchy_TreeMap_Component from './Ext/d3/hierarchy/TreeMap'

export class ExtD3_treemapComponent extends Ext_d3_hierarchy_TreeMap_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-treemap', ExtD3_treemapComponent);
    });
})();
