import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_NestedList from '@sencha/ext-runtime-base/dist/./Ext/NestedList.js';
import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(EWCNestedlist));