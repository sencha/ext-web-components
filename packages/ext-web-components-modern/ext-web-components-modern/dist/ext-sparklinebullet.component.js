import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinebullet = /*#__PURE__*/function (_Ext_sparkline_Bullet) {
  _inheritsLoose(EWCSparklinebullet, _Ext_sparkline_Bullet);

  function EWCSparklinebullet() {
    var _this;

    _this = _Ext_sparkline_Bullet.call(this, [], []) || this;
    _this.xtype = 'sparklinebullet';
    return _this;
  }

  return EWCSparklinebullet;
}(Ext_sparkline_Bullet);

export { EWCSparklinebullet as default };

try {
  if (window.customElements.get('ext-sparklinebullet') == undefined) {
    window.customElements.define('ext-sparklinebullet', ElementParser.withParsedCallback(EWCSparklinebullet));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinebullet') == undefined) {
    window.customElements.define('ext-sparklinebullet', EWCSparklinebullet);
  }
}