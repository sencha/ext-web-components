import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import ElementParser from './common/ElementParser.js';

var EWCEmptytext = /*#__PURE__*/function (_Ext_dataview_EmptyTe) {
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

try {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', ElementParser.withParsedCallback(EWCEmptytext));
  }
} catch (e) {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', EWCEmptytext);
  }
}