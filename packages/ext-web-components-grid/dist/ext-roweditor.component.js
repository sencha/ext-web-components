import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Editor_Component from './Ext/grid/rowedit/Editor';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRoweditorComponent =
/*#__PURE__*/
function (_Ext_grid_rowedit_Edi) {
  _inheritsLoose(ExtRoweditorComponent, _Ext_grid_rowedit_Edi);

  function ExtRoweditorComponent() {
    var _this;

    _this = _Ext_grid_rowedit_Edi.call(this) || this;
    _this.xtype = 'roweditor';
    return _this;
  }

  return ExtRoweditorComponent;
}(Ext_grid_rowedit_Editor_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditor', ExtRoweditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-roweditor', HTMLParsedElement.withParsedCallback(ExtRoweditorComponent));