import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Item from './Ext/toolbar/Item.js';
import ElementParser from './common/ElementParser.js';

var EWCTbitem = /*#__PURE__*/function (_Ext_toolbar_Item) {
  _inheritsLoose(EWCTbitem, _Ext_toolbar_Item);

  function EWCTbitem() {
    var _this;

    _this = _Ext_toolbar_Item.call(this, [], []) || this;
    _this.xtype = 'tbitem';
    return _this;
  }

  return EWCTbitem;
}(Ext_toolbar_Item);

export { EWCTbitem as default };

try {
  if (window.customElements.get('ext-tbitem') == undefined) {
    window.customElements.define('ext-tbitem', ElementParser.withParsedCallback(EWCTbitem));
  }
} catch (e) {
  if (window.customElements.get('ext-tbitem') == undefined) {
    window.customElements.define('ext-tbitem', EWCTbitem);
  }
}