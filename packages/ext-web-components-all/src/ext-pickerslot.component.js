import Ext_picker_Slot from './Ext/picker/Slot.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPickerslot extends Ext_picker_Slot {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pickerslot'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerslot', ExtPickerslot);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pickerslot', HTMLParsedElement.withParsedCallback(ExtPickerslot))
//export default reactify(ExtPickerslot);