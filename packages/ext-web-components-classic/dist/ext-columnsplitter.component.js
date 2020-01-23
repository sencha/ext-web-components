import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_ColumnSplitter from './Ext/layout/container/ColumnSplitter.js';
import ElementParser from './ElementParser.js';

var EWCColumnsplitter =
/*#__PURE__*/
function (_Ext_layout_container) {
  _inheritsLoose(EWCColumnsplitter, _Ext_layout_container);

  function EWCColumnsplitter() {
    var _this;

    _this = _Ext_layout_container.call(this, [], []) || this;
    _this.xtype = 'columnsplitter';
    return _this;
  }

  return EWCColumnsplitter;
}(Ext_layout_container_ColumnSplitter);

export { EWCColumnsplitter as default };

try {
  window.customElements.define('ext-columnsplitter', ElementParser.withParsedCallback(EWCColumnsplitter));
} catch (e) {
  window.customElements.define('ext-columnsplitter', EWCColumnsplitter);
}