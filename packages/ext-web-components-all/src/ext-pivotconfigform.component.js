import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotconfigform extends Ext_pivot_plugin_configurator_Form {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotconfigform'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigform', ExtPivotconfigform);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigform', HTMLParsedElement.withParsedCallback(ExtPivotconfigform))
//export default reactify(ExtPivotconfigform);