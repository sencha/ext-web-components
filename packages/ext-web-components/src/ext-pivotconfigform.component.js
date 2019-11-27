//import Ext_pivot_plugin_configurator_Form from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Form.js';
import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotconfigform extends Ext_pivot_plugin_configurator_Form {
    constructor() {
        super ([], []);
        this.xtype = 'pivotconfigform';
    }

}
window.customElements.define('ext-pivotconfigform', HTMLParsedElement.withParsedCallback(EWCPivotconfigform));

