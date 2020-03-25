import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_NestedList from './Ext/NestedList.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNestedlist = /*#__PURE__*/function (_Ext_NestedList) {
  _inheritsLoose(EWCNestedlist, _Ext_NestedList);

  var _super = _createSuper(EWCNestedlist);

  function EWCNestedlist() {
    var _this;

    _this = _Ext_NestedList.call(this, [], []) || this;
    _this.xtype = 'nestedlist';
    return _this;
  }

  return EWCNestedlist;
}(Ext_NestedList);

export { EWCNestedlist as default };

try {
  window.customElements.define('ext-nestedlist', ElementParser.withParsedCallback(EWCNestedlist));
} catch (e) {
  window.customElements.define('ext-nestedlist', EWCNestedlist);
}