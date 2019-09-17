import Ext_panel_Time_Component from './Ext/panel/Time'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTimepanelComponent extends Ext_panel_Time_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'timepanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timepanel', ExtTimepanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(ExtTimepanelComponent))
