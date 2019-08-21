import Ext_field_CheckboxGroup_Component from './Ext/field/CheckboxGroup'

export class ExtCheckboxgroupComponent extends Ext_field_CheckboxGroup_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-checkboxgroup', ExtCheckboxgroupComponent);
    });
})();
