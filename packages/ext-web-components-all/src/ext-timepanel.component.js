import Ext_panel_Time from './Ext/panel/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTimepanel extends Ext_panel_Time {
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
//        window.customElements.define('ext-timepanel', ExtTimepanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(ExtTimepanel))
//export default reactify(ExtTimepanel);