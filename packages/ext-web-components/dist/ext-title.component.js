import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Title_Component from './Ext/Title';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTitleComponent =
/*#__PURE__*/
function (_Ext_Title_Component) {
  _inheritsLoose(ExtTitleComponent, _Ext_Title_Component);

  function ExtTitleComponent() {
    var _this;

    _this = _Ext_Title_Component.call(this, {}, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return ExtTitleComponent;
}(Ext_Title_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-title', ExtTitleComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitleComponent));