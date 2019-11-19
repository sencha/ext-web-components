import Ext_Map from './Ext/Map'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMapComponent extends Ext_Map {
    constructor() {
        super (
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
