import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Title from './Ext/Title';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTitleComponent =
/*#__PURE__*/
function (_Ext_Title) {
  _inheritsLoose(ExtTitleComponent, _Ext_Title);

  function ExtTitleComponent() {
    var _this;

    _this = _Ext_Title.call(this, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return ExtTitleComponent;
}(Ext_Title); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-title', ExtTitleComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitleComponent));