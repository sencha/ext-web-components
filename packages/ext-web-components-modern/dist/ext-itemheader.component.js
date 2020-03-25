import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import ElementParser from './runtime/ElementParser.js';

var EWCItemheader = /*#__PURE__*/function (_Ext_dataview_ItemHea) {
  _inheritsLoose(EWCItemheader, _Ext_dataview_ItemHea);

  var _super = _createSuper(EWCItemheader);

  function EWCItemheader() {
    var _this;

    _this = _Ext_dataview_ItemHea.call(this, [], []) || this;
    _this.xtype = 'itemheader';
    return _this;
  }

  return EWCItemheader;
}(Ext_dataview_ItemHeader);

export { EWCItemheader as default };

try {
  window.customElements.define('ext-itemheader', ElementParser.withParsedCallback(EWCItemheader));
} catch (e) {
  window.customElements.define('ext-itemheader', EWCItemheader);
}