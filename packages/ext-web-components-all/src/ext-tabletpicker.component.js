import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTabletpicker extends Ext_picker_Tablet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tabletpicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabletpicker', ExtTabletpicker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpicker))
//export default reactify(ExtTabletpicker);