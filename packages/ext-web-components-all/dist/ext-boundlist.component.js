import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtBoundlist =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(ExtBoundlist, _Ext_dataview_BoundLi);

  function ExtBoundlist() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this, [], []) || this;
    _this.xtype = 'boundlist';
    return _this;
  }

  return ExtBoundlist;
}(Ext_dataview_BoundList); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-boundlist', ExtBoundlist);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtBoundlist as default };
window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlist)); //export default reactify(ExtBoundlist);