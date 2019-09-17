import Ext_ux_colorpick_Button_Component from './Ext/ux/colorpick/Button'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtColorbuttonComponent extends Ext_ux_colorpick_Button_Component {
    constructor() {
        super ()
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
