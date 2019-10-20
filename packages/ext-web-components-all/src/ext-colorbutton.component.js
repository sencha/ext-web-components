import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtColorbutton extends Ext_ux_colorpick_Button {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorbutton'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorbutton', ExtColorbutton);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorbutton', HTMLParsedElement.withParsedCallback(ExtColorbutton))
//export default reactify(ExtColorbutton);