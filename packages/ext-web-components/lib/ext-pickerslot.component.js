import Ext_picker_Slot_Component from './Ext/picker/Slot'

export class ExtPickerslotComponent extends Ext_picker_Slot_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pickerslot', ExtPickerslotComponent);
    });
})();
