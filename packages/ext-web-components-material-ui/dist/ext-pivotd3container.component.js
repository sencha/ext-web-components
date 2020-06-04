import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotd3container = /*#__PURE__*/function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(EWCPivotd3container, _Ext_pivot_d3_Contain);

  function EWCPivotd3container() {
    var _this;

    _this = _Ext_pivot_d3_Contain.call(this, [], []) || this;
    _this.xtype = 'pivotd3container';
    return _this;
  }

  return EWCPivotd3container;
}(Ext_pivot_d3_Container);

export { EWCPivotd3container as default };

try {
  if (window.customElements.get('ext-pivotd3container') == undefined) {
    window.customElements.define('ext-pivotd3container', ElementParser.withParsedCallback(EWCPivotd3container));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotd3container') == undefined) {
    window.customElements.define('ext-pivotd3container', EWCPivotd3container);
  }
}