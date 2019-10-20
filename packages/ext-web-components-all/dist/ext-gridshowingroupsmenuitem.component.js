import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtGridshowingroupsmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_ShowIn) {
  _inheritsLoose(ExtGridshowingroupsmenuitem, _Ext_grid_menu_ShowIn);

  function ExtGridshowingroupsmenuitem() {
    var _this;

    _this = _Ext_grid_menu_ShowIn.call(this, [], []) || this;
    _this.xtype = 'gridshowingroupsmenuitem';
    return _this;
  }

  return ExtGridshowingroupsmenuitem;
}(Ext_grid_menu_ShowInGroups); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitem);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtGridshowingroupsmenuitem as default };
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitem)); //export default reactify(ExtGridshowingroupsmenuitem);