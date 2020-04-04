import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_FlashComponent from './Ext/FlashComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCFlash = /*#__PURE__*/function (_Ext_FlashComponent) {
  _inheritsLoose(EWCFlash, _Ext_FlashComponent);

  var _super = _createSuper(EWCFlash);

  function EWCFlash() {
    var _this;

    _this = _Ext_FlashComponent.call(this, [], []) || this;
    _this.xtype = 'flash';
    return _this;
  }

  return EWCFlash;
}(Ext_FlashComponent);

export { EWCFlash as default };

try {
  if (window.customElements.get('ext-flash') == undefined) {
    window.customElements.define('ext-flash', ElementParser.withParsedCallback(EWCFlash));
  }
} catch (e) {
  if (window.customElements.get('ext-flash') == undefined) {
    window.customElements.define('ext-flash', EWCFlash);
  }
}