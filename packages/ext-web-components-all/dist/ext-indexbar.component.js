import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtIndexbar =
/*#__PURE__*/
function (_Ext_IndexBar) {
  _inheritsLoose(ExtIndexbar, _Ext_IndexBar);

  function ExtIndexbar() {
    var _this;

    _this = _Ext_IndexBar.call(this, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return ExtIndexbar;
}(Ext_IndexBar);

export { ExtIndexbar as default };
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbar));