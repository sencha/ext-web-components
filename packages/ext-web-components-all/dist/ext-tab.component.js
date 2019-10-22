import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTab =
/*#__PURE__*/
function (_Ext_Tab) {
  _inheritsLoose(ExtTab, _Ext_Tab);

  function ExtTab() {
    var _this;

    _this = _Ext_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return ExtTab;
}(Ext_Tab);

export { ExtTab as default };
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTab));