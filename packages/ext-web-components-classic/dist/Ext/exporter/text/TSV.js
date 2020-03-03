import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_text_CSV from '../../../Ext/exporter/text/CSV.js';

var Ext_exporter_text_TSV = /*#__PURE__*/function (_Ext_exporter_text_CS) {
  _inheritsLoose(Ext_exporter_text_TSV, _Ext_exporter_text_CS);

  Ext_exporter_text_TSV.PROPERTIES = function PROPERTIES() {
    return ['author', 'binary', 'charset', 'data', 'fileName', 'mimeType', 'showSummary', 'title'];
  };

  Ext_exporter_text_TSV.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_text_TSV.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_text_TSV.PROPERTIES());
    return Ext_exporter_text_CSV.getProperties(properties);
  };

  Ext_exporter_text_TSV.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_text_TSV.EVENTS());
    return Ext_exporter_text_CSV.getEvents(events);
  };

  _createClass(Ext_exporter_text_TSV, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_text_CS.observedAttributes;
      Ext_exporter_text_TSV.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_text_TSV.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_text_TSV(properties, events) {
    return _Ext_exporter_text_CS.call(this, properties.concat(Ext_exporter_text_TSV.PROPERTIES()), events.concat(Ext_exporter_text_TSV.EVENTS())) || this;
  }

  var _proto = Ext_exporter_text_TSV.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_text_CS.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_text_CS.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_text_TSV;
}(Ext_exporter_text_CSV);

export { Ext_exporter_text_TSV as default };