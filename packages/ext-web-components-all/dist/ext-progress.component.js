import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtProgress =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
  _inheritsLoose(ExtProgress, _Ext_ProgressBarWidge);

  function ExtProgress() {
    var _this;

    _this = _Ext_ProgressBarWidge.call(this, [], []) || this;
    _this.xtype = 'progress';
    return _this;
  }

  return ExtProgress;
}(Ext_ProgressBarWidget);

export { ExtProgress as default };
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(ExtProgress));