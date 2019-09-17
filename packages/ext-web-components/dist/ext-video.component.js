import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Video_Component from './Ext/Video';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtVideoComponent =
/*#__PURE__*/
function (_Ext_Video_Component) {
  _inheritsLoose(ExtVideoComponent, _Ext_Video_Component);

  function ExtVideoComponent() {
    var _this;

    _this = _Ext_Video_Component.call(this, {}, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return ExtVideoComponent;
}(Ext_Video_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-video', ExtVideoComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideoComponent));