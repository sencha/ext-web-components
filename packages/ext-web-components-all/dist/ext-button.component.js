import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtButton =
/*#__PURE__*/
function (_Ext_Button) {
  _inheritsLoose(ExtButton, _Ext_Button);

  function ExtButton() {
    var _this;

    _this = _Ext_Button.call(this, [], []) || this;
    _this.xtype = 'button';
    return _this;
  }

  return ExtButton;
}(Ext_Button);

export { ExtButton as default };
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButton));