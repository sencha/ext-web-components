import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_data_Group from '../../../Ext/exporter/data/Group.js';

var Ext_exporter_data_Table = /*#__PURE__*/function (_Ext_exporter_data_Gr) {
  _inheritsLoose(Ext_exporter_data_Table, _Ext_exporter_data_Gr);

  Ext_exporter_data_Table.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'columns', 'groups', 'id', 'idPrefix', 'rows', 'summaries', 'summary', 'text'];
  };

  Ext_exporter_data_Table.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_data_Table.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_data_Table.PROPERTIES());
    return Ext_exporter_data_Group.getProperties(properties);
  };

  Ext_exporter_data_Table.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_data_Table.EVENTS());
    return Ext_exporter_data_Group.getEvents(events);
  };

  _createClass(Ext_exporter_data_Table, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_data_Gr.observedAttributes;
      Ext_exporter_data_Table.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_data_Table.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_data_Table(properties, events) {
    return _Ext_exporter_data_Gr.call(this, properties.concat(Ext_exporter_data_Table.PROPERTIES()), events.concat(Ext_exporter_data_Table.EVENTS())) || this;
  }

  var _proto = Ext_exporter_data_Table.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_data_Gr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_data_Gr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_data_Table;
}(Ext_exporter_data_Group);

export { Ext_exporter_data_Table as default };