import Ext_ux_desktop_TaskBar from './Ext/ux/desktop/TaskBar.js';
import ElementParser from './ElementParser.js';

export default class EWCTaskbar extends Ext_ux_desktop_TaskBar {
  constructor() {
    super ([], []);
    this.xtype = 'taskbar';
  }
}
try {
  window.customElements.define('ext-taskbar', ElementParser.withParsedCallback(EWCTaskbar));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-taskbar', EWCTaskbar);
}
