import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotconfigpanel =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigpanel, _Ext_pivot_plugin_con);

  function ExtPivotconfigpanel() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigpanel';
    return _this;
  }

  return ExtPivotconfigpanel;
}(Ext_pivot_plugin_configurator_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanel);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotconfigpanel as default };
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(ExtPivotconfigpanel)); //export default reactify(ExtPivotconfigpanel);