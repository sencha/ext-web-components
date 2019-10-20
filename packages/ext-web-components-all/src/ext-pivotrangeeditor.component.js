import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotrangeeditor extends Ext_pivot_plugin_rangeeditor_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotrangeeditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditor);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(ExtPivotrangeeditor))
//export default reactify(ExtPivotrangeeditor);