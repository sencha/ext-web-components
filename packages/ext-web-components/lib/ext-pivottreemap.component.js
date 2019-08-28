import Ext_pivot_d3_TreeMap_Component from './Ext/pivot/d3/TreeMap'

export class ExtPivottreemapComponent extends Ext_pivot_d3_TreeMap_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivottreemap', ExtPivottreemapComponent);
    });
})();
