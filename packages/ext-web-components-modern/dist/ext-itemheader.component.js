import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import ElementParser from './runtime/ElementParser.js';

var EWCItemheader =
/*#__PURE__*/
function (_Ext_dataview_ItemHea) {
  _inheritsLoose(EWCItemheader, _Ext_dataview_ItemHea);

  function EWCItemheader() {
    var _this;

    _this = _Ext_dataview_ItemHea.call(this, [], []) || this;
    _this.xtype = 'itemheader';
    return _this;
  }

  return EWCItemheader;
}(Ext_dataview_ItemHeader);

export { EWCItemheader as default };

try {
  window.customElements.define('ext-itemheader', ElementParser.withParsedCallback(EWCItemheader));
} catch (e) {
  window.customElements.define('ext-itemheader', EWCItemheader);
}