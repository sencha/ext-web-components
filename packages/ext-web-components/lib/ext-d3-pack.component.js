import Ext_d3_hierarchy_Pack_Component from './Ext/d3/hierarchy/Pack'

export class ExtD3_packComponent extends Ext_d3_hierarchy_Pack_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-pack', ExtD3_packComponent);
    });
})();
