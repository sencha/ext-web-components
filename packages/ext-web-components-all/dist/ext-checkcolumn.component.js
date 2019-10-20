import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtCheckcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Chec) {
  _inheritsLoose(ExtCheckcolumn, _Ext_grid_column_Chec);

  function ExtCheckcolumn() {
    var _this;

    _this = _Ext_grid_column_Chec.call(this, [], []) || this;
    _this.xtype = 'checkcolumn';
    return _this;
  }

  return ExtCheckcolumn;
}(Ext_grid_column_Check); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcolumn', ExtCheckcolumn);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtCheckcolumn as default };
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(ExtCheckcolumn)); //export default reactify(ExtCheckcolumn);