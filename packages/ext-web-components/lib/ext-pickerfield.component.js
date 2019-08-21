import Ext_field_Picker_Component from './Ext/field/Picker'

export class ExtPickerfieldComponent extends Ext_field_Picker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pickerfield', ExtPickerfieldComponent);
    });
})();
