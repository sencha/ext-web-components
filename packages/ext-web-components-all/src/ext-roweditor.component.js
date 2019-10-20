import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRoweditor extends Ext_grid_rowedit_Editor {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditor'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditor', ExtRoweditor);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditor', HTMLParsedElement.withParsedCallback(ExtRoweditor))
//export default reactify(ExtRoweditor);