import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_List from './Ext/List.js';
import ElementParser from './runtime/ElementParser.js';

var EWCList = /*#__PURE__*/function (_Ext_List) {
  _inheritsLoose(EWCList, _Ext_List);

  var _super = _createSuper(EWCList);

  function EWCList() {
    var _this;

    _this = _Ext_List.call(this, [], []) || this;
    _this.xtype = 'list';
    return _this;
  }

  return EWCList;
}(Ext_List);

export { EWCList as default };

try {
  window.customElements.define('ext-list', ElementParser.withParsedCallback(EWCList));
} catch (e) {
  window.customElements.define('ext-list', EWCList);
}