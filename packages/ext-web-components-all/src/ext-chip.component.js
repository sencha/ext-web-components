import Ext_Chip from './Ext/Chip.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtChip extends Ext_Chip {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'chip'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chip', ExtChip);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChip))
//export default reactify(ExtChip);