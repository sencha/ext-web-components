import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_layout_container_ColumnSplitter from './Ext/layout/container/ColumnSplitter.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColumnsplitter = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(EWCColumnsplitter, _Ext_layout_container);

  var _super = _createSuper(EWCColumnsplitter);

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