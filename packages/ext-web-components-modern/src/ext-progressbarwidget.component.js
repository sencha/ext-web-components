import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './ElementParser.js';

export default class EWCProgressbarwidget extends Ext_ProgressBarWidget {
  constructor() {
    super ([], []);
    this.xtype = 'progressbarwidget';
  }
}
window.customElements.define('ext-progressbarwidget', ElementParser.withParsedCallback(EWCProgressbarwidget));
