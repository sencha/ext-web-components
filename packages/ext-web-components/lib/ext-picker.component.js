import Ext_Picker_Component from './Ext/Picker'

export class ExtPickerComponent extends Ext_Picker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-picker', ExtPickerComponent);
    });
})();
