import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_target_Target from '../../../Ext/fx/target/Target.js';

var Ext_fx_target_Component = /*#__PURE__*/function (_Ext_fx_target_Target) {
  _inheritsLoose(Ext_fx_target_Component, _Ext_fx_target_Target);

  Ext_fx_target_Component.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_target_Component.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_target_Component.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_target_Component.PROPERTIES());
    return Ext_fx_target_Target.getProperties(properties);
  };

  Ext_fx_target_Component.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_target_Component.EVENTS());
    return Ext_fx_target_Target.getEvents(events);
  };

  _createClass(Ext_fx_target_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_target_Target.observedAttributes;
      Ext_fx_target_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_target_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_target_Component(properties, events) {
    return _Ext_fx_target_Target.call(this, properties.concat(Ext_fx_target_Component.PROPERTIES()), events.concat(Ext_fx_target_Component.EVENTS())) || this;
  }

  var _proto = Ext_fx_target_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_target_Target.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_target_Target.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_target_Component;
}(Ext_fx_target_Target);

export { Ext_fx_target_Component as default };