import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FileButton from './Ext/field/FileButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtFilebuttonComponent =
/*#__PURE__*/
function (_Ext_field_FileButton) {
  _inheritsLoose(ExtFilebuttonComponent, _Ext_field_FileButton);

  function ExtFilebuttonComponent() {
    var _this;

    _this = _Ext_field_FileButton.call(this, [], []) || this;
    _this.xtype = 'filebutton';
    return _this;
  }

  return ExtFilebuttonComponent;
}(Ext_field_FileButton); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filebutton', ExtFilebuttonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(ExtFilebuttonComponent));