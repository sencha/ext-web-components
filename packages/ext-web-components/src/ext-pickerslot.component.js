import Ext_picker_Slot from './Ext/picker/Slot'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPickerslotComponent extends Ext_picker_Slot {
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
//        window.customElements.define('ext-pickerslot', ExtPickerslotComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pickerslot', HTMLParsedElement.withParsedCallback(ExtPickerslotComponent))
