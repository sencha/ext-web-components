import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorpickercolorpreview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorpickercolorpreview', HTMLParsedElement.withParsedCallback(ExtColorpickercolorpreview))
//export default reactify(ExtColorpickercolorpreview);