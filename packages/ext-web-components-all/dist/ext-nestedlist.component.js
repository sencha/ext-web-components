import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtNestedlist =
/*#__PURE__*/
function (_Ext_NestedList) {
  _inheritsLoose(ExtNestedlist, _Ext_NestedList);

  function ExtNestedlist() {
    var _this;

    _this = _Ext_NestedList.call(this, [], []) || this;
    _this.xtype = 'nestedlist';
    return _this;
  }

  return ExtNestedlist;
}(Ext_NestedList);

export { ExtNestedlist as default };
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlist));