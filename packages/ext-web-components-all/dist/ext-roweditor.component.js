import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtRoweditor =
/*#__PURE__*/
function (_Ext_grid_rowedit_Edi) {
  _inheritsLoose(ExtRoweditor, _Ext_grid_rowedit_Edi);

  function ExtRoweditor() {
    var _this;

    _this = _Ext_grid_rowedit_Edi.call(this, [], []) || this;
    _this.xtype = 'roweditor';
    return _this;
  }

  return ExtRoweditor;
}(Ext_grid_rowedit_Editor); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditor', ExtRoweditor);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtRoweditor as default };
window.customElements.define('ext-roweditor', HTMLParsedElement.withParsedCallback(ExtRoweditor)); //export default reactify(ExtRoweditor);