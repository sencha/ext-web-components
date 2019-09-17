import Ext_Map_Component from './Ext/Map'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMapComponent extends Ext_Map_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'map'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-map', ExtMapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(ExtMapComponent))
