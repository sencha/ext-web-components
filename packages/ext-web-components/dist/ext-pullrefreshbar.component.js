import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Bar_Component from './Ext/dataview/pullrefresh/Bar';
export var ExtPullrefreshbarComponent =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshbarComponent, _Ext_dataview_pullref);

  function ExtPullrefreshbarComponent() {
    return _Ext_dataview_pullref.call(this, '', '', {}, '') || this;
  }

  return ExtPullrefreshbarComponent;
}(Ext_dataview_pullrefresh_Bar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbarComponent);
  });
})();