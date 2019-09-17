import Ext_slider_Toggle_Component from './Ext/slider/Toggle'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTogglesliderComponent extends Ext_slider_Toggle_Component {
    constructor() {
        super ()
        this.xtype = 'toggleslider'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toggleslider', ExtTogglesliderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(ExtTogglesliderComponent))
