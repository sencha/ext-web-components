import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotd3container =
/*#__PURE__*/
function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(ExtPivotd3container, _Ext_pivot_d3_Contain);

  function ExtPivotd3container() {
    var _this;

    _this = _Ext_pivot_d3_Contain.call(this, [], []) || this;
    _this.xtype = 'pivotd3container';
    return _this;
  }

  return ExtPivotd3container;
}(Ext_pivot_d3_Container);

export { ExtPivotd3container as default };
window.customElements.define('ext-pivotd3container', HTMLParsedElement.withParsedCallback(ExtPivotd3container));