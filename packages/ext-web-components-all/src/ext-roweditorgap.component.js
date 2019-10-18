import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRoweditorgapComponent extends Ext_grid_rowedit_Gap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditorgap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorgap', ExtRoweditorgapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(ExtRoweditorgapComponent))
