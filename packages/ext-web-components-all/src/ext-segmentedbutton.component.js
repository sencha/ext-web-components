import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSegmentedbutton extends Ext_button_Segmented {
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
//        window.customElements.define('ext-segmentedbutton', ExtSegmentedbutton);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(ExtSegmentedbutton))
//export default reactify(ExtSegmentedbutton);