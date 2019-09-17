import Ext_ux_colorpick_ColorPreview_Component from './Ext/ux/colorpick/ColorPreview'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtColorpickercolorpreviewComponent extends Ext_ux_colorpick_ColorPreview_Component {
    constructor() {
        super (
            {},
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
