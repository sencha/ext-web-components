import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotconfigpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(ExtPivotconfigpanel))
//export default reactify(ExtPivotconfigpanel);