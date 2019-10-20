import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotgridrow =
/*#__PURE__*/
function (_Ext_pivot_Row) {
  _inheritsLoose(ExtPivotgridrow, _Ext_pivot_Row);

  function ExtPivotgridrow() {
    var _this;

    _this = _Ext_pivot_Row.call(this, [], []) || this;
    _this.xtype = 'pivotgridrow';
    return _this;
  }

  return ExtPivotgridrow;
}(Ext_pivot_Row); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridrow', ExtPivotgridrow);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotgridrow as default };
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrow)); //export default reactify(ExtPivotgridrow);