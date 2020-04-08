import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_Base from '../../Ext/exporter/Base.js';

var Ext_exporter_Excel = /*#__PURE__*/function (_Ext_exporter_Base) {
  _inheritsLoose(Ext_exporter_Excel, _Ext_exporter_Base);

  Ext_exporter_Excel.PROPERTIES = function PROPERTIES() {
    return ['author', 'binary', 'charset', 'data', 'defaultStyle', 'fileName', 'groupFooterStyle', 'groupHeaderStyle', 'mimeType', 'showSummary', 'tableHeaderStyle', 'title', 'titleStyle'];
  };

  Ext_exporter_Excel.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_Excel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_Excel.PROPERTIES());
    return Ext_exporter_Base.getProperties(properties);
  };

  Ext_exporter_Excel.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_Excel.EVENTS());
    return Ext_exporter_Base.getEvents(events);
  };

  _createClass(Ext_exporter_Excel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_Base.observedAttributes;
      Ext_exporter_Excel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_Excel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_Excel(properties, events) {
    return _Ext_exporter_Base.call(this, properties.concat(Ext_exporter_Excel.PROPERTIES()), events.concat(Ext_exporter_Excel.EVENTS())) || this;
  }

  var _proto = Ext_exporter_Excel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_Excel;
}(Ext_exporter_Base);

export { Ext_exporter_Excel as default };