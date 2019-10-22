import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotrangeeditor extends Ext_pivot_plugin_rangeeditor_Panel {
    constructor() {
        super ([],[])
        this.xtype = 'pivotrangeeditor';
    }
}
window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(ExtPivotrangeeditor))
