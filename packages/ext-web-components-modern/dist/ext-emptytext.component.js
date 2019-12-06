import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_dataview_EmptyText from '@sencha/ext-runtime-base/dist/./Ext/dataview/EmptyText.js';
import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCEmptytext =
/*#__PURE__*/
function (_Ext_dataview_EmptyTe) {
  _inheritsLoose(EWCEmptytext, _Ext_dataview_EmptyTe);

  function EWCEmptytext() {
    var _this;

    _this = _Ext_dataview_EmptyTe.call(this, [], []) || this;
    _this.xtype = 'emptytext';
    return _this;
  }

  return EWCEmptytext;
}(Ext_dataview_EmptyText);

export { EWCEmptytext as default };
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(EWCEmptytext));