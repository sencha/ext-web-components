import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_History = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_History, _Ext_Base);

  Ext_History.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_History.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'token'
    }, {
      name: 'ready',
      parameters: 'history'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_History.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_History.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_History.getEvents = function getEvents(events) {
    events = events.concat(Ext_History.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_History, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_History.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_History.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_History(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_History.PROPERTIES()), events.concat(Ext_History.EVENTS())) || this;
  }

  var _proto = Ext_History.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_History;
}(Ext_Base);

export { Ext_History as default };