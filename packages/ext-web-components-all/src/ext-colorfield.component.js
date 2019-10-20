import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtColorfield extends Ext_ux_colorpick_Field {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'colorfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorfield', ExtColorfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(ExtColorfield))
//export default reactify(ExtColorfield);