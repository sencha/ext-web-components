import Ext_Spacer_Component from './Ext/Spacer'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSpacerComponent extends Ext_Spacer_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'spacer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacer', ExtSpacerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacerComponent))
