import Ext_button_Segmented_Component from './Ext/button/Segmented'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSegmentedbuttonComponent extends Ext_button_Segmented_Component {
    constructor() {
        super (
            {},
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
