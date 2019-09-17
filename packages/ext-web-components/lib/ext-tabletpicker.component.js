import Ext_picker_Tablet_Component from './Ext/picker/Tablet'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTabletpickerComponent extends Ext_picker_Tablet_Component {
    constructor() {
        super (
            {},
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
