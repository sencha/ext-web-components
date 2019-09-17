import Ext_field_CheckboxGroup_Component from './Ext/field/CheckboxGroup'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCheckboxgroupComponent extends Ext_field_CheckboxGroup_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'checkboxgroup'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkboxgroup', ExtCheckboxgroupComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(ExtCheckboxgroupComponent))
