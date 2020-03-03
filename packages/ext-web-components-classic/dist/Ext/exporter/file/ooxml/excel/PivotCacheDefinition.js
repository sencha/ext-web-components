import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

var Ext_exporter_file_ooxml_excel_PivotCacheDefinition = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_PivotCacheDefinition, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'backgroundQuery', 'cacheFields', 'cacheRecords', 'cacheSource', 'contentType', 'createdVersion', 'enableRefresh', 'fileName', 'fileNameTemplate', 'folder', 'generateTplAttributes', 'id', 'idPrefix', 'index', 'invalid', 'minRefreshableVersion', 'missingItemsLimit', 'name', 'nameTemplate', 'optimizeMemory', 'path', 'pivotCache', 'recordCount', 'refreshedBy', 'refreshedDateIso', 'refreshedVersion', 'refreshOnLoad', 'relationship', 'saveData', 'supportAdvancedDrill', 'supportSubquery', 'tplAttributes', 'tplNonAttributes', 'tupleCache', 'upgradeOnRefresh'];
  };

  Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_PivotCacheDefinition.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_PivotCacheDefinition.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_PivotCacheDefinition, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_PivotCacheDefinition(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_PivotCacheDefinition.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_PivotCacheDefinition.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_PivotCacheDefinition;
}(Ext_exporter_file_ooxml_XmlRels);

export { Ext_exporter_file_ooxml_excel_PivotCacheDefinition as default };