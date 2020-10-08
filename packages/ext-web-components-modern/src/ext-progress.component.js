import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCProgress extends Ext_ProgressBarWidget {
  constructor() {
    super ([], []);
    this.xtype = 'progress';
  }
}
try {
  if (window.customElements.get('ext-progress') == undefined) {
    window.customElements.define('ext-progress', ElementParser.withParsedCallback(EWCProgress));
  }
}
catch(e) {
  if (window.customElements.get('ext-progress') == undefined) {
    window.customElements.define('ext-progress', EWCProgress);
  }
}
