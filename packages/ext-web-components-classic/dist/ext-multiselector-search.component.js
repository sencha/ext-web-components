import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_view_MultiSelectorSearch from './Ext/view/MultiSelectorSearch.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMultiselector_search = /*#__PURE__*/function (_Ext_view_MultiSelect) {
  _inheritsLoose(EWCMultiselector_search, _Ext_view_MultiSelect);

  var _super = _createSuper(EWCMultiselector_search);

  function EWCMultiselector_search() {
    var _this;

    _this = _Ext_view_MultiSelect.call(this, [], []) || this;
    _this.xtype = 'multiselector-search';
    return _this;
  }

  return EWCMultiselector_search;
}(Ext_view_MultiSelectorSearch);

export { EWCMultiselector_search as default };

try {
  window.customElements.define('ext-multiselector-search', ElementParser.withParsedCallback(EWCMultiselector_search));
} catch (e) {
  window.customElements.define('ext-multiselector-search', EWCMultiselector_search);
}