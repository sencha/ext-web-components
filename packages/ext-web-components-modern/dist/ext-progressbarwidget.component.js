import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_ProgressBarWidget from '@sencha/ext-runtime-base/dist/./Ext/ProgressBarWidget.js';
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCProgressbarwidget =
/*#__PURE__*/
function (_Ext_ProgressBarWidge) {
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
window.customElements.define('ext-progressbarwidget', HTMLParsedElement.withParsedCallback(EWCProgressbarwidget));