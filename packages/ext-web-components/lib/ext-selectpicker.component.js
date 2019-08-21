import Ext_picker_SelectPicker_Component from './Ext/picker/SelectPicker'

export class ExtSelectpickerComponent extends Ext_picker_SelectPicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-selectpicker', ExtSelectpickerComponent);
    });
})();
