import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtListitemplaceholderComponent =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(ExtListitemplaceholderComponent, _Ext_dataview_ListIte);

  function ExtListitemplaceholderComponent() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this, [], []) || this;
    _this.xtype = 'listitemplaceholder';
    return _this;
  }

  return ExtListitemplaceholderComponent;
}(Ext_dataview_ListItemPlaceholder); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listitemplaceholder', ExtListitemplaceholderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(ExtListitemplaceholderComponent));