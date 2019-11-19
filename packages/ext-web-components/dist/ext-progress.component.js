import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ProgressBarWidget from '@sencha/ext-runtime-base/dist/./Ext/ProgressBarWidget.js';
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(EWCProgress));