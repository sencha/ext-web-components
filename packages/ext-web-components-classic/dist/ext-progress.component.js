import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import ElementParser from './ElementParser.js';

var EWCProgress =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
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
  window.customElements.define('ext-progress', ElementParser.withParsedCallback(EWCProgress));
} catch (e) {
  window.customElements.define('ext-progress', EWCProgress);
}