import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_GridPanel from '@sencha/ext-runtime-base/dist/./Ext/grid/GridPanel.js';
import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './ElementParser.js';

var EWCGridpanel =
/*#__PURE__*/
function (_Ext_grid_GridPanel) {
  _inheritsLoose(EWCGridpanel, _Ext_grid_GridPanel);

  function EWCGridpanel() {
    var _this;

    _this = _Ext_grid_GridPanel.call(this, [], []) || this;
    _this.xtype = 'gridpanel';
    return _this;
  }

  return EWCGridpanel;
}(Ext_grid_GridPanel);

export { EWCGridpanel as default };
window.customElements.define('ext-gridpanel', ElementParser.withParsedCallback(EWCGridpanel));