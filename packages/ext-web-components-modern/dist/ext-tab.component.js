import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Tab from '@sencha/ext-runtime-base/dist/./Ext/Tab.js';
import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTab =
/*#__PURE__*/
function (_Ext_Tab) {
  _inheritsLoose(EWCTab, _Ext_Tab);

  function EWCTab() {
    var _this;

    _this = _Ext_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return EWCTab;
}(Ext_Tab);

export { EWCTab as default };
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(EWCTab));