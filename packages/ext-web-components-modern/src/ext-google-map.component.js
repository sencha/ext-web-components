import Ext_Map from './Ext/Map.js';
import ElementParser from './ElementParser.js';

export default class EWCGoogle_map extends Ext_Map {
  constructor() {
    super ([], []);
    this.xtype = 'google-map';
  }
}
window.customElements.define('ext-google-map', ElementParser.withParsedCallback(EWCGoogle_map));
