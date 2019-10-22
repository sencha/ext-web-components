import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar from './Ext/TitleBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTitlebar =
/*#__PURE__*/
function (_Ext_TitleBar) {
  _inheritsLoose(ExtTitlebar, _Ext_TitleBar);

  function ExtTitlebar() {
    var _this;

    _this = _Ext_TitleBar.call(this, [], []) || this;
    _this.xtype = 'titlebar';
    return _this;
  }

  return ExtTitlebar;
}(Ext_TitleBar);

export { ExtTitlebar as default };
window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebar));