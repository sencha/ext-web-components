import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_ajax_Simlet from '../../../Ext/ux/ajax/Simlet.js';

var Ext_ux_ajax_DataSimlet = /*#__PURE__*/function (_Ext_ux_ajax_Simlet) {
  _inheritsLoose(Ext_ux_ajax_DataSimlet, _Ext_ux_ajax_Simlet);

  Ext_ux_ajax_DataSimlet.PROPERTIES = function PROPERTIES() {
    return ['responseHeaders', 'responseText', 'responseXML', 'status', 'statusText'];
  };

  Ext_ux_ajax_DataSimlet.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_ajax_DataSimlet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_ajax_DataSimlet.PROPERTIES());
    return Ext_ux_ajax_Simlet.getProperties(properties);
  };

  Ext_ux_ajax_DataSimlet.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_ajax_DataSimlet.EVENTS());
    return Ext_ux_ajax_Simlet.getEvents(events);
  };

  _createClass(Ext_ux_ajax_DataSimlet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_ajax_Simlet.observedAttributes;
      Ext_ux_ajax_DataSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_ajax_DataSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_ajax_DataSimlet(properties, events) {
    return _Ext_ux_ajax_Simlet.call(this, properties.concat(Ext_ux_ajax_DataSimlet.PROPERTIES()), events.concat(Ext_ux_ajax_DataSimlet.EVENTS())) || this;
  }

  var _proto = Ext_ux_ajax_DataSimlet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_ajax_Simlet.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_ajax_Simlet.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_ajax_DataSimlet;
}(Ext_ux_ajax_Simlet);

export { Ext_ux_ajax_DataSimlet as default };