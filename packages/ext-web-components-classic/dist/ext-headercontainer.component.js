import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_header_Container from './Ext/grid/header/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCHeadercontainer = /*#__PURE__*/function (_Ext_grid_header_Cont) {
  _inheritsLoose(EWCHeadercontainer, _Ext_grid_header_Cont);

  function EWCHeadercontainer() {
    var _this;

    _this = _Ext_grid_header_Cont.call(this, [], []) || this;
    _this.xtype = 'headercontainer';
    return _this;
  }

  return EWCHeadercontainer;
}(Ext_grid_header_Container);

export { EWCHeadercontainer as default };

try {
  if (window.customElements.get('ext-headercontainer') == undefined) {
    window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
  }
} catch (e) {
  if (window.customElements.get('ext-headercontainer') == undefined) {
    window.customElements.define('ext-headercontainer', EWCHeadercontainer);
  }
}