import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRoweditorgap extends Ext_grid_rowedit_Gap {
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
//        window.customElements.define('ext-roweditorgap', ExtRoweditorgap);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(ExtRoweditorgap))
//export default reactify(ExtRoweditorgap);