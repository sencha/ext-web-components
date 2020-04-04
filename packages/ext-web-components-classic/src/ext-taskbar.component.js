import Ext_ux_desktop_TaskBar from './Ext/ux/desktop/TaskBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTaskbar extends Ext_ux_desktop_TaskBar {
  constructor() {
    super ([], []);
    this.xtype = 'taskbar';
  }
}
try {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', ElementParser.withParsedCallback(EWCTaskbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-taskbar') == undefined) {
    window.customElements.define('ext-taskbar', EWCTaskbar);
  }
}
