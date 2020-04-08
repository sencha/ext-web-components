import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_Base from '../../../../Ext/exporter/file/Base.js';

var Ext_exporter_file_ooxml_Relationship = /*#__PURE__*/function (_Ext_exporter_file_Ba) {
  _inheritsLoose(Ext_exporter_file_ooxml_Relationship, _Ext_exporter_file_Ba);

  Ext_exporter_file_ooxml_Relationship.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'id', 'idPrefix', 'parentFolder', 'path'];
  };

  Ext_exporter_file_ooxml_Relationship.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_Relationship.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_Relationship.PROPERTIES());
    return Ext_exporter_file_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_Relationship.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_Relationship.EVENTS());
    return Ext_exporter_file_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_Relationship, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_Ba.observedAttributes;
      Ext_exporter_file_ooxml_Relationship.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_Relationship.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_Relationship(properties, events) {
    return _Ext_exporter_file_Ba.call(this, properties.concat(Ext_exporter_file_ooxml_Relationship.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_Relationship.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_Relationship.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_Relationship;
}(Ext_exporter_file_Base);

export { Ext_exporter_file_ooxml_Relationship as default };