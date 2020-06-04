import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinebullet extends Ext_sparkline_Bullet {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebullet';
  }
}
try {
  if (window.customElements.get('ext-sparklinebullet') == undefined) {
    window.customElements.define('ext-sparklinebullet', ElementParser.withParsedCallback(EWCSparklinebullet));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinebullet') == undefined) {
    window.customElements.define('ext-sparklinebullet', EWCSparklinebullet);
  }
}
