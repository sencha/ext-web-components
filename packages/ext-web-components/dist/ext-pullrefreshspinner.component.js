import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Spinner_Component from './Ext/dataview/pullrefresh/Spinner';
export var ExtPullrefreshspinnerComponent =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshspinnerComponent, _Ext_dataview_pullref);

  function ExtPullrefreshspinnerComponent() {
    return _Ext_dataview_pullref.call(this, '', '', {}, '') || this;
  }

  return ExtPullrefreshspinnerComponent;
}(Ext_dataview_pullrefresh_Spinner_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pullrefreshspinner', ExtPullrefreshspinnerComponent);
  });
})();