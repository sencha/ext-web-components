import Ext_TabPanel from './Ext/TabPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTabpanel extends Ext_TabPanel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tabpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabpanel', ExtTabpanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(ExtTabpanel))
//export default reactify(ExtTabpanel);