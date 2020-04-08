import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './common/ElementParser.js';

var EWCProgress = /*#__PURE__*/function (_Ext_ProgressBarWidge) {
  _inheritsLoose(EWCProgress, _Ext_ProgressBarWidge);

  function EWCProgress() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, [], []) || this;
    _this.xtype = 'progress';
    return _this;
  }

  return EWCProgress;
}(Ext_ProgressBarWidget);

export { EWCProgress as default };

try {
  if (window.customElements.get('ext-progress') == undefined) {
    window.customElements.define('ext-progress', ElementParser.withParsedCallback(EWCProgress));
  }
} catch (e) {
  if (window.customElements.get('ext-progress') == undefined) {
    window.customElements.define('ext-progress', EWCProgress);
  }
}