import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCComponent = /*#__PURE__*/function (_Ext_AbstractComponen) {
  _inheritsLoose(EWCComponent, _Ext_AbstractComponen);

  function EWCComponent() {
    var _this;

    _this = _Ext_AbstractComponen.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return EWCComponent;
}(Ext_AbstractComponent);

export { EWCComponent as default };

try {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
  }
} catch (e) {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', EWCComponent);
  }
}