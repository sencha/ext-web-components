import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_Base from '../../../../Ext/exporter/file/Base.js';

var Ext_exporter_file_excel_Workbook = /*#__PURE__*/function (_Ext_exporter_file_Ba) {
  _inheritsLoose(Ext_exporter_file_excel_Workbook, _Ext_exporter_file_Ba);

  Ext_exporter_file_excel_Workbook.PROPERTIES = function PROPERTIES() {
    return ['author', 'autoGenerateId', 'autoGenerateKey', 'id', 'idPrefix', 'protectStructure', 'protectWindows', 'styles', 'title', 'windowHeight', 'windowWidth', 'worksheets'];
  };

  Ext_exporter_file_excel_Workbook.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_excel_Workbook.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_excel_Workbook.PROPERTIES());
    return Ext_exporter_file_Base.getProperties(properties);
  };

  Ext_exporter_file_excel_Workbook.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_excel_Workbook.EVENTS());
    return Ext_exporter_file_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_excel_Workbook, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_Ba.observedAttributes;
      Ext_exporter_file_excel_Workbook.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_excel_Workbook.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_excel_Workbook(properties, events) {
    return _Ext_exporter_file_Ba.call(this, properties.concat(Ext_exporter_file_excel_Workbook.PROPERTIES()), events.concat(Ext_exporter_file_excel_Workbook.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_excel_Workbook.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_excel_Workbook;
}(Ext_exporter_file_Base);

export { Ext_exporter_file_excel_Workbook as default };