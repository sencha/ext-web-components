import Ext_draw_Component_Component from './Ext/draw/Component'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDrawComponent extends Ext_draw_Component_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'draw'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-draw', ExtDrawComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-draw', HTMLParsedElement.withParsedCallback(ExtDrawComponent))
