import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditorcell = /*#__PURE__*/function (_Ext_grid_rowedit_Cel) {
  _inheritsLoose(EWCRoweditorcell, _Ext_grid_rowedit_Cel);

  var _super = _createSuper(EWCRoweditorcell);

  function EWCRoweditorcell() {
    var _this;

    _this = _Ext_grid_rowedit_Cel.call(this, [], []) || this;
    _this.xtype = 'roweditorcell';
    return _this;
  }

  return EWCRoweditorcell;
}(Ext_grid_rowedit_Cell);

export { EWCRoweditorcell as default };

try {
  if (window.customElements.get('ext-roweditorcell') == undefined) {
    window.customElements.define('ext-roweditorcell', ElementParser.withParsedCallback(EWCRoweditorcell));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditorcell') == undefined) {
    window.customElements.define('ext-roweditorcell', EWCRoweditorcell);
  }
}