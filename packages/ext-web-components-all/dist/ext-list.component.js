import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_List from './Ext/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtList =
/*#__PURE__*/
function (_Ext_List) {
  _inheritsLoose(ExtList, _Ext_List);

  function ExtList() {
    var _this;

    _this = _Ext_List.call(this, [], []) || this;
    _this.xtype = 'list';
    return _this;
  }

  return ExtList;
}(Ext_List);

export { ExtList as default };
window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(ExtList));