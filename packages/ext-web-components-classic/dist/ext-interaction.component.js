import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_Abstract from './Ext/chart/interactions/Abstract.js';
import ElementParser from './common/ElementParser.js';

var EWCInteraction = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(EWCInteraction, _Ext_chart_interactio);

  function EWCInteraction() {
    var _this;

    _this = _Ext_chart_interactio.call(this, [], []) || this;
    _this.xtype = 'interaction';
    return _this;
  }

  return EWCInteraction;
}(Ext_chart_interactions_Abstract);

export { EWCInteraction as default };

try {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', ElementParser.withParsedCallback(EWCInteraction));
  }
} catch (e) {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', EWCInteraction);
  }
}