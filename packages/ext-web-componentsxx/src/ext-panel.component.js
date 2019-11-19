import Ext_panel_Panel from './Ext/panel/Panel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPanelComponent extends Ext_panel_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'panel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panel', ExtPanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(ExtPanelComponent))
