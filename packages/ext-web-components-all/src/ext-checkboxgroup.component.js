import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCheckboxgroup extends Ext_field_CheckboxGroup {
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
//        window.customElements.define('ext-checkboxgroup', ExtCheckboxgroup);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(ExtCheckboxgroup))
//export default reactify(ExtCheckboxgroup);