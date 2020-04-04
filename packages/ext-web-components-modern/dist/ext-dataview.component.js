import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_DataView from './Ext/DataView.js';
import ElementParser from './common/ElementParser.js';

var EWCDataview = /*#__PURE__*/function (_Ext_DataView) {
  _inheritsLoose(EWCDataview, _Ext_DataView);

  var _super = _createSuper(EWCDataview);

  function EWCDataview() {
    var _this;

    _this = _Ext_DataView.call(this, [], []) || this;
    _this.xtype = 'dataview';
    return _this;
  }

  return EWCDataview;
}(Ext_DataView);

export { EWCDataview as default };

try {
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
  }
} catch (e) {
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', EWCDataview);
  }
}