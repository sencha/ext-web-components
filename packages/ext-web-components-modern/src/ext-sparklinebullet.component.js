import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import ElementParser from './ElementParser.js';

export default class EWCSparklinebullet extends Ext_sparkline_Bullet {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebullet';
  }
}
try {
  window.customElements.define('ext-sparklinebullet', ElementParser.withParsedCallback(EWCSparklinebullet));
}
catch(e) {
  window.customElements.define('ext-sparklinebullet', EWCSparklinebullet);
}
