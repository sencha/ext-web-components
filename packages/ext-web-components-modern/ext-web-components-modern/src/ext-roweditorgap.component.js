import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditorgap extends Ext_grid_rowedit_Gap {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorgap';
  }
}
try {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', ElementParser.withParsedCallback(EWCRoweditorgap));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', EWCRoweditorgap);
  }
}
