import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCProgressbar extends Ext_ProgressBar {
  constructor() {
    super ([], []);
    this.xtype = 'progressbar';
  }
}
try {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', EWCProgressbar);
  }
}
