import Ext_field_FileButton from './Ext/field/FileButton'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFilebuttonComponent extends Ext_field_FileButton {
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
//        window.customElements.define('ext-filebutton', ExtFilebuttonComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(ExtFilebuttonComponent))
