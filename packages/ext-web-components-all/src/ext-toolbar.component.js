import Ext_Toolbar from './Ext/Toolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtToolbar extends Ext_Toolbar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'toolbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toolbar', ExtToolbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(ExtToolbar))
//export default reactify(ExtToolbar);