import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCheckboxgroupComponent extends Ext_field_CheckboxGroup {
    constructor() {
        super (
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
