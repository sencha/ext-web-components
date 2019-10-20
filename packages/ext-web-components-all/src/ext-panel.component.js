import Ext_panel_Panel from './Ext/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPanel extends Ext_panel_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'panel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panel', ExtPanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(ExtPanel))
//export default reactify(ExtPanel);