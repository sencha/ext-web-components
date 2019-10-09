import Ext_draw_Surface from './Ext/draw/Surface'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSurfaceComponent extends Ext_draw_Surface {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'surface'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-surface', ExtSurfaceComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(ExtSurfaceComponent))
