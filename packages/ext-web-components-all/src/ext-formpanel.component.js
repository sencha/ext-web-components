import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFormpanel extends Ext_form_FormPanel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'formpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-formpanel', ExtFormpanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(ExtFormpanel))
//export default reactify(ExtFormpanel);