import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import ElementParser from './common/ElementParser.js';

var EWCEmptytext = /*#__PURE__*/function (_Ext_dataview_EmptyTe) {
  _inheritsLoose(EWCEmptytext, _Ext_dataview_EmptyTe);

  var _super = _createSuper(EWCEmptytext);

  function EWCEmptytext() {
    var _this;

    _this = _Ext_dataview_EmptyTe.call(this, [], []) || this;
    _this.xtype = 'emptytext';
    return _this;
  }

  return EWCEmptytext;
}(Ext_dataview_EmptyText);

export { EWCEmptytext as default };

try {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', ElementParser.withParsedCallback(EWCEmptytext));
  }
} catch (e) {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', EWCEmptytext);
  }
}