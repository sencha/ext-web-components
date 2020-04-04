import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './common/ElementParser.js';

var EWCProgressbarwidget = /*#__PURE__*/function (_Ext_ProgressBarWidge) {
  _inheritsLoose(EWCProgressbarwidget, _Ext_ProgressBarWidge);

  var _super = _createSuper(EWCProgressbarwidget);

  function EWCProgressbarwidget() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, [], []) || this;
    _this.xtype = 'progressbarwidget';
    return _this;
  }

  return EWCProgressbarwidget;
}(Ext_ProgressBarWidget);

export { EWCProgressbarwidget as default };

try {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', ElementParser.withParsedCallback(EWCProgressbarwidget));
  }
} catch (e) {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', EWCProgressbarwidget);
  }
}