import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './ElementParser.js';

var EWCButtongroup =
/*#__PURE__*/
function (_Ext_ButtonGroup) {
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
window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));