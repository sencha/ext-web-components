import Ext_Label from './Ext/Label.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtLabelComponent extends Ext_Label {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'label'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-label', ExtLabelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabelComponent))
