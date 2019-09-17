import Ext_field_File_Component from './Ext/field/File'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFilefieldComponent extends Ext_field_File_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'filefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filefield', ExtFilefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(ExtFilefieldComponent))
