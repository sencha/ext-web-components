import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_File from './Ext/field/File';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFilefieldComponent =
/*#__PURE__*/
function (_Ext_field_File) {
  _inheritsLoose(ExtFilefieldComponent, _Ext_field_File);

  function ExtFilefieldComponent() {
    var _this;

    _this = _Ext_field_File.call(this, [], []) || this;
    _this.xtype = 'filefield';
    return _this;
  }

  return ExtFilefieldComponent;
}(Ext_field_File); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filefield', ExtFilefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(ExtFilefieldComponent));