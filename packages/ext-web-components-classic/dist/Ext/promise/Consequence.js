import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_promise_Consequence = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_promise_Consequence, _Ext_Base);

  Ext_promise_Consequence.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_promise_Consequence.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_promise_Consequence.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_promise_Consequence.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_promise_Consequence.getEvents = function getEvents(events) {
    events = events.concat(Ext_promise_Consequence.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_promise_Consequence, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_promise_Consequence.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_promise_Consequence.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_promise_Consequence(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_promise_Consequence.PROPERTIES()), events.concat(Ext_promise_Consequence.EVENTS())) || this;
  }

  var _proto = Ext_promise_Consequence.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_promise_Consequence;
}(Ext_Base);

export { Ext_promise_Consequence as default };