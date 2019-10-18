import Ext_panel_Time from './Ext/panel/Time.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTimepanelComponent extends Ext_panel_Time {
    constructor() {
        super (
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
