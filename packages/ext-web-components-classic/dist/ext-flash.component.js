import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_FlashComponent from './Ext/FlashComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCFlash = /*#__PURE__*/function (_Ext_FlashComponent) {
  _inheritsLoose(EWCFlash, _Ext_FlashComponent);

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