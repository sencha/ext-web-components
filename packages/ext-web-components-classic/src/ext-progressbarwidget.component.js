import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './ElementParser.js';

export default class EWCProgressbarwidget extends Ext_ProgressBarWidget {
  constructor() {
    super ([], []);
    this.xtype = 'progressbarwidget';
  }
}
try {
  window.customElements.define('ext-progressbarwidget', ElementParser.withParsedCallback(EWCProgressbarwidget));
}
catch(e) {
  window.customElements.define('ext-progressbarwidget', EWCProgressbarwidget);
}
