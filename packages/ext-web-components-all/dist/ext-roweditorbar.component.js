import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtRoweditorbar =
/*#__PURE__*/
function (_Ext_grid_rowedit_Bar) {
  _inheritsLoose(ExtRoweditorbar, _Ext_grid_rowedit_Bar);

  function ExtRoweditorbar() {
    var _this;

    _this = _Ext_grid_rowedit_Bar.call(this, [], []) || this;
    _this.xtype = 'roweditorbar';
    return _this;
  }

  return ExtRoweditorbar;
}(Ext_grid_rowedit_Bar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorbar', ExtRoweditorbar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtRoweditorbar as default };
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(ExtRoweditorbar)); //export default reactify(ExtRoweditorbar);