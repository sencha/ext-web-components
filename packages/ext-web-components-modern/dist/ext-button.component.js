import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Button from '@sencha/ext-runtime-base/dist/./Ext/Button.js';
import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCButton =
/*#__PURE__*/
function (_Ext_Button) {
  _inheritsLoose(EWCButton, _Ext_Button);

  function EWCButton() {
    var _this;

    _this = _Ext_Button.call(this, [], []) || this;
    _this.xtype = 'button';
    return _this;
  }

  return EWCButton;
}(Ext_Button);

export { EWCButton as default };
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(EWCButton));