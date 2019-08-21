import Ext_dataview_component_DataItem_Component from './Ext/dataview/component/DataItem'

export class ExtDataitemComponent extends Ext_dataview_component_DataItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-dataitem', ExtDataitemComponent);
    });
})();
