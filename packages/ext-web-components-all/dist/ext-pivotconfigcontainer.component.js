import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotconfigcontainer =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigcontainer, _Ext_pivot_plugin_con);

  function ExtPivotconfigcontainer() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigcontainer';
    return _this;
  }

  return ExtPivotconfigcontainer;
}(Ext_pivot_plugin_configurator_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigcontainer', ExtPivotconfigcontainer);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotconfigcontainer as default };
window.customElements.define('ext-pivotconfigcontainer', HTMLParsedElement.withParsedCallback(ExtPivotconfigcontainer)); //export default reactify(ExtPivotconfigcontainer);