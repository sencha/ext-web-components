import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_List from '@sencha/ext-runtime-base/dist/./Ext/List.js';
import Ext_List from './Ext/List.js';
import ElementParser from './ElementParser.js';

var EWCList =
/*#__PURE__*/
function (_Ext_List) {
  _inheritsLoose(EWCList, _Ext_List);

  function EWCList() {
    var _this;

    _this = _Ext_List.call(this, [], []) || this;
    _this.xtype = 'list';
    return _this;
  }

  return EWCList;
}(Ext_List);

export { EWCList as default };
window.customElements.define('ext-list', ElementParser.withParsedCallback(EWCList));