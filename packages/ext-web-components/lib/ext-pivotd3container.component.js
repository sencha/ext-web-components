import Ext_pivot_d3_Container_Component from './Ext/pivot/d3/Container'

export class ExtPivotd3containerComponent extends Ext_pivot_d3_Container_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotd3container', ExtPivotd3containerComponent);
    });
})();
