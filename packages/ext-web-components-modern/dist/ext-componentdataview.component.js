import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component from './Ext/dataview/Component.js';
import ElementParser from './runtime/ElementParser.js';

var EWCComponentdataview = /*#__PURE__*/function (_Ext_dataview_Compone) {
  _inheritsLoose(EWCComponentdataview, _Ext_dataview_Compone);

  function EWCComponentdataview() {
    var _this;

    _this = _Ext_dataview_Compone.call(this, [], []) || this;
    _this.xtype = 'componentdataview';
    return _this;
  }

  return EWCComponentdataview;
}(Ext_dataview_Component);

export { EWCComponentdataview as default };

try {
  window.customElements.define('ext-componentdataview', ElementParser.withParsedCallback(EWCComponentdataview));
} catch (e) {
  window.customElements.define('ext-componentdataview', EWCComponentdataview);
}