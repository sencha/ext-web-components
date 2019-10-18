import Ext_Map from './Ext/Map.js'
import HTMLParsedElement from './HTMLParsedElement.js'

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
