import Ext_panel_Title_Component from './Ext/panel/Title'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPaneltitleComponent extends Ext_panel_Title_Component {
    constructor() {
        super ()
        this.xtype = 'paneltitle'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltitle', ExtPaneltitleComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitleComponent))
