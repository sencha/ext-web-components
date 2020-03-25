import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDataitem = /*#__PURE__*/function (_Ext_dataview_compone) {
  _inheritsLoose(EWCDataitem, _Ext_dataview_compone);

  var _super = _createSuper(EWCDataitem);

  function EWCDataitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'dataitem';
    return _this;
  }

  return EWCDataitem;
}(Ext_dataview_component_DataItem);

export { EWCDataitem as default };

try {
  window.customElements.define('ext-dataitem', ElementParser.withParsedCallback(EWCDataitem));
} catch (e) {
  window.customElements.define('ext-dataitem', EWCDataitem);
}