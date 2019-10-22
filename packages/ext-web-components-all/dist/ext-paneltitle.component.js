import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title from './Ext/panel/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPaneltitle =
/*#__PURE__*/
function (_Ext_panel_Title) {
  _inheritsLoose(ExtPaneltitle, _Ext_panel_Title);

  function ExtPaneltitle() {
    var _this;

    _this = _Ext_panel_Title.call(this, [], []) || this;
    _this.xtype = 'paneltitle';
    return _this;
  }

  return ExtPaneltitle;
}(Ext_panel_Title);

export { ExtPaneltitle as default };
window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitle));