import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorgap extends Ext_grid_rowedit_Gap {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorgap';
  }
}
window.customElements.define('ext-roweditorgap', ElementParser.withParsedCallback(EWCRoweditorgap));
