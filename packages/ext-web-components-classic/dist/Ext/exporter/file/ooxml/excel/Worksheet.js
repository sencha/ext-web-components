import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_excel_Sheet from '../../../../../Ext/exporter/file/ooxml/excel/Sheet.js';

var Ext_exporter_file_ooxml_excel_Worksheet = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_Worksheet, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'bottomRightRef', 'columns', 'contentType', 'fileName', 'fileNameTemplate', 'folder', 'id', 'idPrefix', 'index', 'name', 'nameTemplate', 'path', 'relationship', 'rows', 'topLeftRef', 'tplAttributes', 'tplNonAttributes', 'workbook'];
  };

  Ext_exporter_file_ooxml_excel_Worksheet.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_Worksheet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES());
    return Ext_exporter_file_ooxml_excel_Sheet.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_Worksheet.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_Worksheet.EVENTS());
    return Ext_exporter_file_ooxml_excel_Sheet.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_Worksheet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_Worksheet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_Worksheet(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_Worksheet.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_Worksheet.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_Worksheet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_Worksheet;
}(Ext_exporter_file_ooxml_excel_Sheet);

export { Ext_exporter_file_ooxml_excel_Worksheet as default };