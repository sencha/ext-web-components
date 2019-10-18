import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Video from './Ext/Video.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtVideoComponent =
/*#__PURE__*/
function (_Ext_Video) {
  _inheritsLoose(ExtVideoComponent, _Ext_Video);

  function ExtVideoComponent() {
    var _this;

    _this = _Ext_Video.call(this, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return ExtVideoComponent;
}(Ext_Video); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-video', ExtVideoComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideoComponent));