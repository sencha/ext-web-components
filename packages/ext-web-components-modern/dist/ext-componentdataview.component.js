import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_dataview_Component from '@sencha/ext-runtime-base/dist/./Ext/dataview/Component.js';
import Ext_dataview_Component from './Ext/dataview/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCComponentdataview =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
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
window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(EWCComponentdataview));