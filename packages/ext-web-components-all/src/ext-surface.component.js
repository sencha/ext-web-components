import Ext_draw_Surface from './Ext/draw/Surface.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSurface extends Ext_draw_Surface {
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
//        window.customElements.define('ext-surface', ExtSurface);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(ExtSurface))
//export default reactify(ExtSurface);