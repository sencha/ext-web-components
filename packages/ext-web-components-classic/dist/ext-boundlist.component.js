import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_BoundList from '@sencha/ext-runtime-base/dist/./Ext/BoundList.js';
import Ext_BoundList from './Ext/BoundList.js';
import ElementParser from './ElementParser.js';

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
window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));