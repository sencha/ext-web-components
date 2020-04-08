import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

var Ext_exporter_file_ooxml_excel_CacheField = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_CacheField, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_CacheField.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'caption', 'databaseField', 'formula', 'generateTplAttributes', 'hierarchy', 'id', 'idPrefix', 'level', 'mappingCount', 'memberPropertyField', 'name', 'numFmtId', 'propertyName', 'serverField', 'sharedItems', 'sqlType', 'tplAttributes', 'tplNonAttributes', 'uniqueList'];
  };

  Ext_exporter_file_ooxml_excel_CacheField.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_CacheField.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_CacheField.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_CacheField.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_CacheField.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_CacheField, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_CacheField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_CacheField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_CacheField(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_CacheField.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_CacheField.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_CacheField.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_CacheField;
}(Ext_exporter_file_ooxml_Base);

export { Ext_exporter_file_ooxml_excel_CacheField as default };