import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditorgap = /*#__PURE__*/function (_Ext_grid_rowedit_Gap) {
  _inheritsLoose(EWCRoweditorgap, _Ext_grid_rowedit_Gap);

  var _super = _createSuper(EWCRoweditorgap);

  function EWCRoweditorgap() {
    var _this;

    _this = _Ext_grid_rowedit_Gap.call(this, [], []) || this;
    _this.xtype = 'roweditorgap';
    return _this;
  }

  return EWCRoweditorgap;
}(Ext_grid_rowedit_Gap);

export { EWCRoweditorgap as default };

try {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', ElementParser.withParsedCallback(EWCRoweditorgap));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditorgap') == undefined) {
    window.customElements.define('ext-roweditorgap', EWCRoweditorgap);
  }
}