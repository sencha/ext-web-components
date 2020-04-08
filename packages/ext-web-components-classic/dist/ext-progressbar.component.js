import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './common/ElementParser.js';

var EWCProgressbar = /*#__PURE__*/function (_Ext_ProgressBar) {
  _inheritsLoose(EWCProgressbar, _Ext_ProgressBar);

  function EWCProgressbar() {
    var _this;

    _this = _Ext_ProgressBar.call(this, [], []) || this;
    _this.xtype = 'progressbar';
    return _this;
  }

  return EWCProgressbar;
}(Ext_ProgressBar);

export { EWCProgressbar as default };

try {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));
  }
} catch (e) {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', EWCProgressbar);
  }
}