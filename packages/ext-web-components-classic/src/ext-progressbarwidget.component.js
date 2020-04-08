import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCProgressbarwidget extends Ext_ProgressBarWidget {
  constructor() {
    super ([], []);
    this.xtype = 'progressbarwidget';
  }
}
try {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', ElementParser.withParsedCallback(EWCProgressbarwidget));
  }
}
catch(e) {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', EWCProgressbarwidget);
  }
}
