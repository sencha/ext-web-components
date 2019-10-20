import Ext_field_Panel from './Ext/field/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFieldpanel extends Ext_field_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'fieldpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldpanel', ExtFieldpanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(ExtFieldpanel))
//export default reactify(ExtFieldpanel);