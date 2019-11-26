//import Ext_pivot_plugin_rangeeditor_Panel from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/rangeeditor/Panel.js';
import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotrangeeditor extends Ext_pivot_plugin_rangeeditor_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'pivotrangeeditor';
    }

}
window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(EWCPivotrangeeditor));

