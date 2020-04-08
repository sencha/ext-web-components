import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_AbstractContainer from './Ext/AbstractContainer.js';
import ElementParser from './common/ElementParser.js';

var EWCContainer = /*#__PURE__*/function (_Ext_AbstractContaine) {
  _inheritsLoose(EWCContainer, _Ext_AbstractContaine);

  function EWCContainer() {
    var _this;

    _this = _Ext_AbstractContaine.call(this, [], []) || this;
    _this.xtype = 'container';
    return _this;
  }

  return EWCContainer;
}(Ext_AbstractContainer);

export { EWCContainer as default };

try {
  if (window.customElements.get('ext-container') == undefined) {
    window.customElements.define('ext-container', ElementParser.withParsedCallback(EWCContainer));
  }
} catch (e) {
  if (window.customElements.get('ext-container') == undefined) {
    window.customElements.define('ext-container', EWCContainer);
  }
}