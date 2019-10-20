import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtColorselector extends Ext_ux_colorpick_Selector {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorselector'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorselector', ExtColorselector);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorselector', HTMLParsedElement.withParsedCallback(ExtColorselector))
//export default reactify(ExtColorselector);