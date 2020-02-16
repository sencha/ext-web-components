import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRoweditorgap extends Ext_grid_rowedit_Gap {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorgap';
  }
}
try {
  window.customElements.define('ext-roweditorgap', ElementParser.withParsedCallback(EWCRoweditorgap));
}
catch(e) {
  window.customElements.define('ext-roweditorgap', EWCRoweditorgap);
}
