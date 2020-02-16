import Ext_Map from './Ext/Map.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMap extends Ext_Map {
  constructor() {
    super ([], []);
    this.xtype = 'map';
  }
}
try {
  window.customElements.define('ext-map', ElementParser.withParsedCallback(EWCMap));
}
catch(e) {
  window.customElements.define('ext-map', EWCMap);
}
