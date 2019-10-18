import Ext_SplitButton from './Ext/SplitButton.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSplitbuttonComponent extends Ext_SplitButton {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'splitbutton'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-splitbutton', ExtSplitbuttonComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbuttonComponent))
