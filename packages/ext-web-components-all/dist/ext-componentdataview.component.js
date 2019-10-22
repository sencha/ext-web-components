import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component from './Ext/dataview/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtComponentdataview =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
  _inheritsLoose(ExtComponentdataview, _Ext_dataview_Compone);

  function ExtComponentdataview() {
    var _this;

    _this = _Ext_dataview_Compone.call(this, [], []) || this;
    _this.xtype = 'componentdataview';
    return _this;
  }

  return ExtComponentdataview;
}(Ext_dataview_Component);

export { ExtComponentdataview as default };
window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(ExtComponentdataview));