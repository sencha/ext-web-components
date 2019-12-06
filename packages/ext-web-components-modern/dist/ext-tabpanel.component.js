import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_TabPanel from '@sencha/ext-runtime-base/dist/./Ext/TabPanel.js';
import Ext_TabPanel from './Ext/TabPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTabpanel =
/*#__PURE__*/
function (_Ext_TabPanel) {
  _inheritsLoose(EWCTabpanel, _Ext_TabPanel);

  function EWCTabpanel() {
    var _this;

    _this = _Ext_TabPanel.call(this, [], []) || this;
    _this.xtype = 'tabpanel';
    return _this;
  }

  return EWCTabpanel;
}(Ext_TabPanel);

export { EWCTabpanel as default };
window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(EWCTabpanel));