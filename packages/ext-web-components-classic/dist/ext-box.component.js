import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCBox = /*#__PURE__*/function (_Ext_AbstractComponen) {
  _inheritsLoose(EWCBox, _Ext_AbstractComponen);

  function EWCBox() {
    var _this;

    _this = _Ext_AbstractComponen.call(this, [], []) || this;
    _this.xtype = 'box';
    return _this;
  }

  return EWCBox;
}(Ext_AbstractComponent);

export { EWCBox as default };

try {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', ElementParser.withParsedCallback(EWCBox));
  }
} catch (e) {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', EWCBox);
  }
}