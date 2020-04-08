import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCButtongroup = /*#__PURE__*/function (_Ext_ButtonGroup) {
  _inheritsLoose(EWCButtongroup, _Ext_ButtonGroup);

  function EWCButtongroup() {
    var _this;

    _this = _Ext_ButtonGroup.call(this, [], []) || this;
    _this.xtype = 'buttongroup';
    return _this;
  }

  return EWCButtongroup;
}(Ext_ButtonGroup);

export { EWCButtongroup as default };

try {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));
  }
} catch (e) {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', EWCButtongroup);
  }
}