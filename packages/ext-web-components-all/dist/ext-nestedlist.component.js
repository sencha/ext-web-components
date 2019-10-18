import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtNestedlistComponent =
/*#__PURE__*/
function (_Ext_NestedList) {
  _inheritsLoose(ExtNestedlistComponent, _Ext_NestedList);

  function ExtNestedlistComponent() {
    var _this;

    _this = _Ext_NestedList.call(this, [], []) || this;
    _this.xtype = 'nestedlist';
    return _this;
  }

  return ExtNestedlistComponent;
}(Ext_NestedList); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-nestedlist', ExtNestedlistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlistComponent));