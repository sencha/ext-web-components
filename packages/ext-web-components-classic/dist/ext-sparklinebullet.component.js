import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinebullet = /*#__PURE__*/function (_Ext_sparkline_Bullet) {
  _inheritsLoose(EWCSparklinebullet, _Ext_sparkline_Bullet);

  var _super = _createSuper(EWCSparklinebullet);

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