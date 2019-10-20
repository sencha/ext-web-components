import Ext_field_FileButton from './Ext/field/FileButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFilebutton extends Ext_field_FileButton {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'filebutton'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filebutton', ExtFilebutton);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(ExtFilebutton))
//export default reactify(ExtFilebutton);