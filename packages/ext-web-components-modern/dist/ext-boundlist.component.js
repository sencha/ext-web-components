import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_dataview_BoundList from '@sencha/ext-runtime-base/dist/./Ext/dataview/BoundList.js';
import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import ElementParser from './ElementParser.js';

var EWCBoundlist =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(EWCBoundlist, _Ext_dataview_BoundLi);

  function EWCBoundlist() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return EWCBoundlist;
}(Ext_dataview_BoundList);

export { EWCBoundlist as default };
window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));