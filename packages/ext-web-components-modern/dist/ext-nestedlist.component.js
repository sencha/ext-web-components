import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NestedList from './Ext/NestedList.js';
import ElementParser from './ElementParser.js';

var EWCNestedlist =
/*#__PURE__*/
function (_Ext_NestedList) {
  _inheritsLoose(EWCNestedlist, _Ext_NestedList);

  function EWCNestedlist() {
    var _this;

    _this = _Ext_NestedList.call(this, [], []) || this;
    _this.xtype = 'nestedlist';
    return _this;
  }

  return EWCNestedlist;
}(Ext_NestedList);

export { EWCNestedlist as default };

try {
  window.customElements.define('ext-nestedlist', ElementParser.withParsedCallback(EWCNestedlist));
} catch (e) {
  window.customElements.define('ext-nestedlist', EWCNestedlist);
}