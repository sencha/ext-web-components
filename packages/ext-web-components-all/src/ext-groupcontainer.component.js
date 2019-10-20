import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGroupcontainer extends Ext_field_FieldGroupContainer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'groupcontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-groupcontainer', ExtGroupcontainer);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(ExtGroupcontainer))
//export default reactify(ExtGroupcontainer);