import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_Base from '../../../../Ext/exporter/file/Base.js';

var Ext_exporter_file_excel_Table =
/*#__PURE__*/
function (_Ext_exporter_file_Ba) {
  _inheritsLoose(Ext_exporter_file_excel_Table, _Ext_exporter_file_Ba);

  Ext_exporter_file_excel_Table.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'columns', 'defaultColumnWidth', 'defaultRowHeight', 'expandedColumnCount', 'expandedRowCount', 'fullColumns', 'fullRows', 'id', 'idPrefix', 'leftCell', 'rows', 'styleId', 'topCell'];
  };

  Ext_exporter_file_excel_Table.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_exporter_file_excel_Table.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_excel_Table.PROPERTIES());
    return Ext_exporter_file_Base.getProperties(properties);
  };

  Ext_exporter_file_excel_Table.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_excel_Table.EVENTS());
    return Ext_exporter_file_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_excel_Table, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_Ba.observedAttributes;
      Ext_exporter_file_excel_Table.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_excel_Table.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_excel_Table(properties, events) {
    return _Ext_exporter_file_Ba.call(this, properties.concat(Ext_exporter_file_excel_Table.PROPERTIES()), events.concat(Ext_exporter_file_excel_Table.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_excel_Table.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_excel_Table;
}(Ext_exporter_file_Base);

export { Ext_exporter_file_excel_Table as default };