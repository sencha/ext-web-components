import Ext_Label_Component from './Ext/Label'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLabelComponent extends Ext_Label_Component {
    constructor() {
        super (
            {},
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
