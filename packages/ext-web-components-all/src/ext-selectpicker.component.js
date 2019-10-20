import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSelectpicker extends Ext_picker_SelectPicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'selectpicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectpicker', ExtSelectpicker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(ExtSelectpicker))
//export default reactify(ExtSelectpicker);