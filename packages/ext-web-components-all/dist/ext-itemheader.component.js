import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtItemheader =
/*#__PURE__*/
function (_Ext_dataview_ItemHea) {
  _inheritsLoose(ExtItemheader, _Ext_dataview_ItemHea);

  function ExtItemheader() {
    var _this;

    _this = _Ext_dataview_ItemHea.call(this, [], []) || this;
    _this.xtype = 'itemheader';
    return _this;
  }

  return ExtItemheader;
}(Ext_dataview_ItemHeader);

export { ExtItemheader as default };
window.customElements.define('ext-itemheader', HTMLParsedElement.withParsedCallback(ExtItemheader));