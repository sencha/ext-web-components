import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRoweditorComponent extends Ext_grid_rowedit_Editor {
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
//        window.customElements.define('ext-roweditor', ExtRoweditorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditor', HTMLParsedElement.withParsedCallback(ExtRoweditorComponent))
