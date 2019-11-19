import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtColorfieldComponent extends Ext_ux_colorpick_Field {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorfield', ExtColorfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(ExtColorfieldComponent))
