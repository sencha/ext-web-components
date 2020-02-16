import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BoundList from './Ext/BoundList.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBoundlist =
/*#__PURE__*/
function (_Ext_BoundList) {
  _inheritsLoose(EWCBoundlist, _Ext_BoundList);

  function EWCBoundlist() {
    var _this;

    _this = _Ext_BoundList.call(this, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return EWCBoundlist;
}(Ext_BoundList);

export { EWCBoundlist as default };

try {
  window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
} catch (e) {
  window.customElements.define('ext-boundlist', EWCBoundlist);
}