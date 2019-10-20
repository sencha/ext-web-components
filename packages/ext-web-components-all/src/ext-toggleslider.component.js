import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtToggleslider extends Ext_slider_Toggle {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'toggleslider'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toggleslider', ExtToggleslider);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(ExtToggleslider))
//export default reactify(ExtToggleslider);