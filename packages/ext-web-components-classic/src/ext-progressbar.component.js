import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCProgressbar extends Ext_ProgressBar {
  constructor() {
    super ([], []);
    this.xtype = 'progressbar';
  }
}
try {
  window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));
}
catch(e) {
  window.customElements.define('ext-progressbar', EWCProgressbar);
}
