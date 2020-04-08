import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_MultiSelector from './Ext/view/MultiSelector.js';
import ElementParser from './common/ElementParser.js';

var EWCMultiselector = /*#__PURE__*/function (_Ext_view_MultiSelect) {
  _inheritsLoose(EWCMultiselector, _Ext_view_MultiSelect);

  function EWCMultiselector() {
    var _this;

    _this = _Ext_view_MultiSelect.call(this, [], []) || this;
    _this.xtype = 'multiselector';
    return _this;
  }

  return EWCMultiselector;
}(Ext_view_MultiSelector);

export { EWCMultiselector as default };

try {
  if (window.customElements.get('ext-multiselector') == undefined) {
    window.customElements.define('ext-multiselector', ElementParser.withParsedCallback(EWCMultiselector));
  }
} catch (e) {
  if (window.customElements.get('ext-multiselector') == undefined) {
    window.customElements.define('ext-multiselector', EWCMultiselector);
  }
}