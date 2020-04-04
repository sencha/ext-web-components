import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_button_Segmented from './Ext/button/Segmented.js';
import ElementParser from './common/ElementParser.js';

var EWCSegmentedbutton = /*#__PURE__*/function (_Ext_button_Segmented) {
  _inheritsLoose(EWCSegmentedbutton, _Ext_button_Segmented);

  var _super = _createSuper(EWCSegmentedbutton);

  function EWCSegmentedbutton() {
    var _this;

    _this = _Ext_button_Segmented.call(this, [], []) || this;
    _this.xtype = 'segmentedbutton';
    return _this;
  }

  return EWCSegmentedbutton;
}(Ext_button_Segmented);

export { EWCSegmentedbutton as default };

try {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', ElementParser.withParsedCallback(EWCSegmentedbutton));
  }
} catch (e) {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', EWCSegmentedbutton);
  }
}