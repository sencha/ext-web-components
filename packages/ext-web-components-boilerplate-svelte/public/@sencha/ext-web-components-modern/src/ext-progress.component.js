import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './ElementParser.js';

export default class EWCProgress extends Ext_ProgressBarWidget {
  constructor() {
    super ([], []);
    this.xtype = 'progress';
  }
}
try {
  window.customElements.define('ext-progress', ElementParser.withParsedCallback(EWCProgress));
}
catch(e) {
  window.customElements.define('ext-progress', EWCProgress);
}
