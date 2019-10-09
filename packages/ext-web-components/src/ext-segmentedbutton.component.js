import Ext_button_Segmented from './Ext/button/Segmented'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSegmentedbuttonComponent extends Ext_button_Segmented {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'segmentedbutton'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-segmentedbutton', ExtSegmentedbuttonComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(ExtSegmentedbuttonComponent))
