import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar from './Ext/Toolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtToolbar =
/*#__PURE__*/
function (_Ext_Toolbar) {
  _inheritsLoose(ExtToolbar, _Ext_Toolbar);

  function ExtToolbar() {
    var _this;

    _this = _Ext_Toolbar.call(this, [], []) || this;
    _this.xtype = 'toolbar';
    return _this;
  }

  return ExtToolbar;
}(Ext_Toolbar);

export { ExtToolbar as default };
window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(ExtToolbar));