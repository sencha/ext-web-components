import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotconfigfield extends Ext_pivot_plugin_configurator_Column {
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
//        window.customElements.define('ext-pivotconfigfield', ExtPivotconfigfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigfield', HTMLParsedElement.withParsedCallback(ExtPivotconfigfield))
//export default reactify(ExtPivotconfigfield);