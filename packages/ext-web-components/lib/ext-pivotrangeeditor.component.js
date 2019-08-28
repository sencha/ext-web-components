import Ext_pivot_plugin_rangeeditor_Panel_Component from './Ext/pivot/plugin/rangeeditor/Panel'

export class ExtPivotrangeeditorComponent extends Ext_pivot_plugin_rangeeditor_Panel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditorComponent);
    });
})();
