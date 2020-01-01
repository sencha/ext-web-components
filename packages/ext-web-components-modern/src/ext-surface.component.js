import Ext_draw_Surface from './Ext/draw/Surface.js';
import ElementParser from './ElementParser.js';

export default class EWCSurface extends Ext_draw_Surface {
  constructor() {
    super ([], []);
    this.xtype = 'surface';
  }
}
window.customElements.define('ext-surface', ElementParser.withParsedCallback(EWCSurface));
