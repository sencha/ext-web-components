import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './common/ElementParser.js';

var EWCProgressbarwidget = /*#__PURE__*/function (_Ext_ProgressBarWidge) {
  _inheritsLoose(EWCProgressbarwidget, _Ext_ProgressBarWidge);

  function EWCProgressbarwidget() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, [], []) || this;
    _this.xtype = 'progressbarwidget';
    return _this;
  }

  return EWCProgressbarwidget;
}(Ext_ProgressBarWidget);

export { EWCProgressbarwidget as default };

try {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', ElementParser.withParsedCallback(EWCProgressbarwidget));
  }
} catch (e) {
  if (window.customElements.get('ext-progressbarwidget') == undefined) {
    window.customElements.define('ext-progressbarwidget', EWCProgressbarwidget);
  }
}