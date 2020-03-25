import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBoundlist = /*#__PURE__*/function (_Ext_dataview_BoundLi) {
  _inheritsLoose(EWCBoundlist, _Ext_dataview_BoundLi);

  var _super = _createSuper(EWCBoundlist);

  function EWCBoundlist() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return EWCBoundlist;
}(Ext_dataview_BoundList);

export { EWCBoundlist as default };

try {
  window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
} catch (e) {
  window.customElements.define('ext-boundlist', EWCBoundlist);
}