import Ext_Map from './Ext/Map.js';
import ElementParser from './ElementParser.js';

export default class EWCMap extends Ext_Map {
  constructor() {
    super ([], []);
    this.xtype = 'map';
  }
}
window.customElements.define('ext-map', ElementParser.withParsedCallback(EWCMap));
