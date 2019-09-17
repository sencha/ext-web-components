import Ext_slider_Thumb_Component from './Ext/slider/Thumb'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtThumbComponent extends Ext_slider_Thumb_Component {
    constructor() {
        super ()
        this.xtype = 'thumb'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-thumb', ExtThumbComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumbComponent))
