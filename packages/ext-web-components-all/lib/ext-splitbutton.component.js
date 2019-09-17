import Ext_SplitButton_Component from './Ext/SplitButton'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSplitbuttonComponent extends Ext_SplitButton_Component {
    constructor() {
        super ()
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
