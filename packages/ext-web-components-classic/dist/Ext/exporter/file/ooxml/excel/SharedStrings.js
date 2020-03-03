import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_Xml from '../../../../../Ext/exporter/file/ooxml/Xml.js';

var Ext_exporter_file_ooxml_excel_SharedStrings = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_SharedStrings, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_SharedStrings.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'contentType', 'fileName', 'fileNameTemplate', 'folder', 'id', 'idPrefix', 'path', 'relationship', 'tplAttributes', 'tplNonAttributes'];
  };

  Ext_exporter_file_ooxml_excel_SharedStrings.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_SharedStrings.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_SharedStrings.PROPERTIES());
    return Ext_exporter_file_ooxml_Xml.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_SharedStrings.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_SharedStrings.EVENTS());
    return Ext_exporter_file_ooxml_Xml.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_SharedStrings, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_SharedStrings.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_SharedStrings.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_SharedStrings(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_SharedStrings.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_SharedStrings.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_SharedStrings.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_SharedStrings;
}(Ext_exporter_file_ooxml_Xml);

export { Ext_exporter_file_ooxml_excel_SharedStrings as default };