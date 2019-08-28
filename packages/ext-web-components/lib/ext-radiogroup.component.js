import Ext_field_RadioGroup_Component from './Ext/field/RadioGroup'

export class ExtRadiogroupComponent extends Ext_field_RadioGroup_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-radiogroup', ExtRadiogroupComponent);
    });
})();
