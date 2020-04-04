import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import ElementParser from './common/ElementParser.js';

var EWCChipview = /*#__PURE__*/function (_Ext_dataview_ChipVie) {
  _inheritsLoose(EWCChipview, _Ext_dataview_ChipVie);

  var _super = _createSuper(EWCChipview);

  function EWCChipview() {
    var _this;

    _this = _Ext_dataview_ChipVie.call(this, [], []) || this;
    _this.xtype = 'chipview';
    return _this;
  }

  return EWCChipview;
}(Ext_dataview_ChipView);

export { EWCChipview as default };

try {
  if (window.customElements.get('ext-chipview') == undefined) {
    window.customElements.define('ext-chipview', ElementParser.withParsedCallback(EWCChipview));
  }
} catch (e) {
  if (window.customElements.get('ext-chipview') == undefined) {
    window.customElements.define('ext-chipview', EWCChipview);
  }
}