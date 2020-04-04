import Ext_draw_Surface from './Ext/draw/Surface.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSurface extends Ext_draw_Surface {
  constructor() {
    super ([], []);
    this.xtype = 'surface';
  }
}
try {
  if (window.customElements.get('ext-surface') == undefined) {
    window.customElements.define('ext-surface', ElementParser.withParsedCallback(EWCSurface));
  }
}
catch(e) {
  if (window.customElements.get('ext-surface') == undefined) {
    window.customElements.define('ext-surface', EWCSurface);
  }
}
