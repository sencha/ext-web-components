import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_List_Component from './Ext/List';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtListComponent =
/*#__PURE__*/
function (_Ext_List_Component) {
  _inheritsLoose(ExtListComponent, _Ext_List_Component);

  function ExtListComponent() {
    var _this;

    _this = _Ext_List_Component.call(this) || this;
    _this.xtype = 'list';
    return _this;
  }

  return ExtListComponent;
}(Ext_List_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-list', ExtListComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(ExtListComponent));