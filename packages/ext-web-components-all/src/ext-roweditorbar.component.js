import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRoweditorbar extends Ext_grid_rowedit_Bar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditorbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorbar', ExtRoweditorbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(ExtRoweditorbar))
//export default reactify(ExtRoweditorbar);