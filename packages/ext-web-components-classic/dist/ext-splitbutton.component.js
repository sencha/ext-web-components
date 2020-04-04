import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_SplitButton from './Ext/SplitButton.js';
import ElementParser from './common/ElementParser.js';

var EWCSplitbutton = /*#__PURE__*/function (_Ext_SplitButton) {
  _inheritsLoose(EWCSplitbutton, _Ext_SplitButton);

  var _super = _createSuper(EWCSplitbutton);

  function EWCSplitbutton() {
    var _this;

    _this = _Ext_SplitButton.call(this, [], []) || this;
    _this.xtype = 'splitbutton';
    return _this;
  }

  return EWCSplitbutton;
}(Ext_SplitButton);

export { EWCSplitbutton as default };

try {
  if (window.customElements.get('ext-splitbutton') == undefined) {
    window.customElements.define('ext-splitbutton', ElementParser.withParsedCallback(EWCSplitbutton));
  }
} catch (e) {
  if (window.customElements.get('ext-splitbutton') == undefined) {
    window.customElements.define('ext-splitbutton', EWCSplitbutton);
  }
}