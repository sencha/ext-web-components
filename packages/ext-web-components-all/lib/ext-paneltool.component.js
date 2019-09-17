import Ext_panel_Tool_Component from './Ext/panel/Tool'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPaneltoolComponent extends Ext_panel_Tool_Component {
    constructor() {
        super ()
        this.xtype = 'paneltool'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltool', ExtPaneltoolComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-paneltool', HTMLParsedElement.withParsedCallback(ExtPaneltoolComponent))
