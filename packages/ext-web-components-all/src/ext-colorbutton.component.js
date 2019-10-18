import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtColorbuttonComponent extends Ext_ux_colorpick_Button {
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
//        window.customElements.define('ext-colorbutton', ExtColorbuttonComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorbutton', HTMLParsedElement.withParsedCallback(ExtColorbuttonComponent))
