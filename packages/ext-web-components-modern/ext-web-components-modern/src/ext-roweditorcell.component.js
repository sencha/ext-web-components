import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditorcell extends Ext_grid_rowedit_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorcell';
  }
}
try {
  if (window.customElements.get('ext-roweditorcell') == undefined) {
    window.customElements.define('ext-roweditorcell', ElementParser.withParsedCallback(EWCRoweditorcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditorcell') == undefined) {
    window.customElements.define('ext-roweditorcell', EWCRoweditorcell);
  }
}
