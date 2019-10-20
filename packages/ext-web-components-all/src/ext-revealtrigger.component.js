import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRevealtrigger extends Ext_field_trigger_Reveal {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'revealtrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-revealtrigger', ExtRevealtrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-revealtrigger', HTMLParsedElement.withParsedCallback(ExtRevealtrigger))
//export default reactify(ExtRevealtrigger);