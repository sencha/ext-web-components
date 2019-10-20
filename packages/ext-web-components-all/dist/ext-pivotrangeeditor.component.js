import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotrangeeditor =
/*#__PURE__*/
function (_Ext_pivot_plugin_ran) {
  _inheritsLoose(ExtPivotrangeeditor, _Ext_pivot_plugin_ran);

  function ExtPivotrangeeditor() {
    var _this;

    _this = _Ext_pivot_plugin_ran.call(this, [], []) || this;
    _this.xtype = 'pivotrangeeditor';
    return _this;
  }

  return ExtPivotrangeeditor;
}(Ext_pivot_plugin_rangeeditor_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditor);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotrangeeditor as default };
window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(ExtPivotrangeeditor)); //export default reactify(ExtPivotrangeeditor);