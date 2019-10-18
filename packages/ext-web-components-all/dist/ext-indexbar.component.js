import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtIndexbarComponent =
/*#__PURE__*/
function (_Ext_IndexBar) {
  _inheritsLoose(ExtIndexbarComponent, _Ext_IndexBar);

  function ExtIndexbarComponent() {
    var _this;

    _this = _Ext_IndexBar.call(this, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return ExtIndexbarComponent;
}(Ext_IndexBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indexbar', ExtIndexbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbarComponent));