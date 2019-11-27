//import Ext_picker_Slot from '@sencha/ext-runtime-base/dist/./Ext/picker/Slot.js';
import Ext_picker_Slot from './Ext/picker/Slot.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPickerslot extends Ext_picker_Slot {
    constructor() {
        super ([], []);
        this.xtype = 'pickerslot';
    }

}
window.customElements.define('ext-pickerslot', HTMLParsedElement.withParsedCallback(EWCPickerslot));

