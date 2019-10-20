import Ext_draw_Component from './Ext/draw/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDraw extends Ext_draw_Component {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'draw'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-draw', ExtDraw);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-draw', HTMLParsedElement.withParsedCallback(ExtDraw))
//export default reactify(ExtDraw);