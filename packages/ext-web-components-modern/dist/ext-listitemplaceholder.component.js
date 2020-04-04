import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import ElementParser from './common/ElementParser.js';

var EWCListitemplaceholder = /*#__PURE__*/function (_Ext_dataview_ListIte) {
  _inheritsLoose(EWCListitemplaceholder, _Ext_dataview_ListIte);

  var _super = _createSuper(EWCListitemplaceholder);

  function EWCListitemplaceholder() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this, [], []) || this;
    _this.xtype = 'listitemplaceholder';
    return _this;
  }

  return EWCListitemplaceholder;
}(Ext_dataview_ListItemPlaceholder);

export { EWCListitemplaceholder as default };

try {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', ElementParser.withParsedCallback(EWCListitemplaceholder));
  }
} catch (e) {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', EWCListitemplaceholder);
  }
}