import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_exporter_file_Base from '../../../../Ext/exporter/file/Base.js';

var Ext_exporter_file_excel_Column = /*#__PURE__*/function (_Ext_exporter_file_Ba) {
  _inheritsLoose(Ext_exporter_file_excel_Column, _Ext_exporter_file_Ba);

  var _super = _createSuper(Ext_exporter_file_excel_Column);

  Ext_exporter_file_excel_Column.PROPERTIES = function PROPERTIES() {
    return ['autoFitWidth', 'autoGenerateId', 'autoGenerateKey', 'caption', 'hidden', 'id', 'idPrefix', 'index', 'span', 'styleId', 'width'];
  };

  Ext_exporter_file_excel_Column.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_excel_Column.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_excel_Column.PROPERTIES());
    return Ext_exporter_file_Base.getProperties(properties);
  };

  Ext_exporter_file_excel_Column.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_excel_Column.EVENTS());
    return Ext_exporter_file_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_excel_Column, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_Ba.observedAttributes;
      Ext_exporter_file_excel_Column.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_excel_Column.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_excel_Column(properties, events) {
    return _Ext_exporter_file_Ba.call(this, properties.concat(Ext_exporter_file_excel_Column.PROPERTIES()), events.concat(Ext_exporter_file_excel_Column.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_excel_Column.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_excel_Column;
}(Ext_exporter_file_Base);

export { Ext_exporter_file_excel_Column as default };