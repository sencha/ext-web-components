import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtListitem =
/*#__PURE__*/
function (_Ext_dataview_compone) {
  _inheritsLoose(ExtListitem, _Ext_dataview_compone);

  function ExtListitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'listitem';
    return _this;
  }

  return ExtListitem;
}(Ext_dataview_component_ListItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listitem', ExtListitem);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtListitem as default };
window.customElements.define('ext-listitem', HTMLParsedElement.withParsedCallback(ExtListitem)); //export default reactify(ExtListitem);