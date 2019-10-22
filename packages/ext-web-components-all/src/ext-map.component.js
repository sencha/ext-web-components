import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMap extends Ext_Map {
    constructor() {
        super ([],[])
        this.xtype = 'map';
    }
}
window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(ExtMap))
