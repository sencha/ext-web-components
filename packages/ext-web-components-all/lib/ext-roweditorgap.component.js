import Ext_grid_rowedit_Gap_Component from './Ext/grid/rowedit/Gap'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRoweditorgapComponent extends Ext_grid_rowedit_Gap_Component {
    constructor() {
        super ()
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
