import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSparklinebullet =
/*#__PURE__*/
function (_Ext_sparkline_Bullet) {
  _inheritsLoose(ExtSparklinebullet, _Ext_sparkline_Bullet);

  function ExtSparklinebullet() {
    var _this;

    _this = _Ext_sparkline_Bullet.call(this, [], []) || this;
    _this.xtype = 'sparklinebullet';
    return _this;
  }

  return ExtSparklinebullet;
}(Ext_sparkline_Bullet);

export { ExtSparklinebullet as default };
window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(ExtSparklinebullet));