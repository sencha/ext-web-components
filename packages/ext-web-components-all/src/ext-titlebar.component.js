import Ext_TitleBar from './Ext/TitleBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTitlebar extends Ext_TitleBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'titlebar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-titlebar', ExtTitlebar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebar))
//export default reactify(ExtTitlebar);