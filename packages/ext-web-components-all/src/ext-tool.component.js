import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTool extends Ext_panel_Tool {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tool'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tool', ExtTool);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(ExtTool))
//export default reactify(ExtTool);