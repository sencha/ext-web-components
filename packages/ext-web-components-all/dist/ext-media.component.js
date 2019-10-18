import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media from './Ext/Media.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtMediaComponent =
/*#__PURE__*/
function (_Ext_Media) {
  _inheritsLoose(ExtMediaComponent, _Ext_Media);

  function ExtMediaComponent() {
    var _this;

    _this = _Ext_Media.call(this, [], []) || this;
    _this.xtype = 'media';
    return _this;
  }

  return ExtMediaComponent;
}(Ext_Media); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMediaComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMediaComponent));