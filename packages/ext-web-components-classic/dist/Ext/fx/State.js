import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_fx_State = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_fx_State, _Ext_Base);

  Ext_fx_State.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_State.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_State.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_State.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_fx_State.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_State.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_fx_State, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_fx_State.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_State.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_State(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_fx_State.PROPERTIES()), events.concat(Ext_fx_State.EVENTS())) || this;
  }

  var _proto = Ext_fx_State.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_State;
}(Ext_Base);

export { Ext_fx_State as default };