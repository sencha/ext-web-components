import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPullrefreshspinnerComponent =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshspinnerComponent, _Ext_dataview_pullref);

  function ExtPullrefreshspinnerComponent() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, [], []) || this;
    _this.xtype = 'pullrefreshspinner';
    return _this;
  }

  return ExtPullrefreshspinnerComponent;
}(Ext_dataview_pullrefresh_Spinner); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pullrefreshspinner', ExtPullrefreshspinnerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(ExtPullrefreshspinnerComponent));