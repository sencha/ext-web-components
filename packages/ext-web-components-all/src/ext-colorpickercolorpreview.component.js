import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtColorpickercolorpreviewComponent extends Ext_ux_colorpick_ColorPreview {
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
//        window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorpickercolorpreview', HTMLParsedElement.withParsedCallback(ExtColorpickercolorpreviewComponent))
