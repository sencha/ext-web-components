import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtChipview extends Ext_dataview_ChipView {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'chipview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chipview', ExtChipview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipview))
//export default reactify(ExtChipview);