import Ext_pivot_plugin_rangeeditor_Panel_Component from './Ext/pivot/plugin/rangeeditor/Panel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotrangeeditorComponent extends Ext_pivot_plugin_rangeeditor_Panel_Component {
    constructor() {
        super ()
        this.xtype = 'pivotrangeeditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(ExtPivotrangeeditorComponent))
