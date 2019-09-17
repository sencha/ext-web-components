import Ext_DataView_Component from './Ext/DataView'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDataviewComponent extends Ext_DataView_Component {
    constructor() {
        super ()
        this.xtype = 'dataview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataview', ExtDataviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(ExtDataviewComponent))
