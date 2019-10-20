import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRoweditorcell extends Ext_grid_rowedit_Cell {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditorcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorcell', ExtRoweditorcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorcell', HTMLParsedElement.withParsedCallback(ExtRoweditorcell))
//export default reactify(ExtRoweditorcell);