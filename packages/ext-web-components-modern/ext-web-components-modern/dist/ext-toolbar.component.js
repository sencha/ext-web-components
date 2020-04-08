import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar from './Ext/Toolbar.js';
import ElementParser from './common/ElementParser.js';

var EWCToolbar = /*#__PURE__*/function (_Ext_Toolbar) {
  _inheritsLoose(EWCToolbar, _Ext_Toolbar);

  function EWCToolbar() {
    var _this;

    _this = _Ext_Toolbar.call(this, [], []) || this;
    _this.xtype = 'toolbar';
    return _this;
  }

  return EWCToolbar;
}(Ext_Toolbar);

export { EWCToolbar as default };

try {
  if (window.customElements.get('ext-toolbar') == undefined) {
    window.customElements.define('ext-toolbar', ElementParser.withParsedCallback(EWCToolbar));
  }
} catch (e) {
  if (window.customElements.get('ext-toolbar') == undefined) {
    window.customElements.define('ext-toolbar', EWCToolbar);
  }
}