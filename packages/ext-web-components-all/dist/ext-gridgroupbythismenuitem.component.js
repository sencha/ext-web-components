import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtGridgroupbythismenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_GroupB) {
  _inheritsLoose(ExtGridgroupbythismenuitem, _Ext_grid_menu_GroupB);

  function ExtGridgroupbythismenuitem() {
    var _this;

    _this = _Ext_grid_menu_GroupB.call(this, [], []) || this;
    _this.xtype = 'gridgroupbythismenuitem';
    return _this;
  }

  return ExtGridgroupbythismenuitem;
}(Ext_grid_menu_GroupByThis); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitem);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtGridgroupbythismenuitem as default };
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(ExtGridgroupbythismenuitem)); //export default reactify(ExtGridgroupbythismenuitem);