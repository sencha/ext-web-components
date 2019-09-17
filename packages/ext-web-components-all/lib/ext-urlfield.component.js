import Ext_form_Url_Component from './Ext/form/Url'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtUrlfieldComponent extends Ext_form_Url_Component {
    constructor() {
        super ()
        this.xtype = 'urlfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-urlfield', ExtUrlfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfieldComponent))
