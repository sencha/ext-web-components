import Ext_Button_Component from './Ext/Button'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtButtonComponent extends Ext_Button_Component {
    constructor() {
        super ()
        this.xtype = 'button'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-button', ExtButtonComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButtonComponent))
