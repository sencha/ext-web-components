import Ext_picker_Tablet from './Ext/picker/Tablet.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTabletpickerComponent extends Ext_picker_Tablet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tabletpicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabletpicker', ExtTabletpickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpickerComponent))
