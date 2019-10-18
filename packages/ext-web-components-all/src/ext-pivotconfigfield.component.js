import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotconfigfieldComponent extends Ext_pivot_plugin_configurator_Column {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotconfigfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigfield', ExtPivotconfigfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigfield', HTMLParsedElement.withParsedCallback(ExtPivotconfigfieldComponent))
