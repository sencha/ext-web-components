import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_DataView from '@sencha/ext-runtime-base/dist/./Ext/DataView.js';
import Ext_DataView from './Ext/DataView.js';
import ElementParser from './ElementParser.js';

var EWCDataview =
/*#__PURE__*/
function (_Ext_DataView) {
  _inheritsLoose(EWCDataview, _Ext_DataView);

  function EWCDataview() {
    var _this;

    _this = _Ext_DataView.call(this, [], []) || this;
    _this.xtype = 'dataview';
    return _this;
  }

  return EWCDataview;
}(Ext_DataView);

export { EWCDataview as default };
window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));