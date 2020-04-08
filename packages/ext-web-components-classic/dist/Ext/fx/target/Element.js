import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_target_Target from '../../../Ext/fx/target/Target.js';

var Ext_fx_target_Element = /*#__PURE__*/function (_Ext_fx_target_Target) {
  _inheritsLoose(Ext_fx_target_Element, _Ext_fx_target_Target);

  Ext_fx_target_Element.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_target_Element.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_target_Element.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_target_Element.PROPERTIES());
    return Ext_fx_target_Target.getProperties(properties);
  };

  Ext_fx_target_Element.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_target_Element.EVENTS());
    return Ext_fx_target_Target.getEvents(events);
  };

  _createClass(Ext_fx_target_Element, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_target_Target.observedAttributes;
      Ext_fx_target_Element.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_target_Element.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_target_Element(properties, events) {
    return _Ext_fx_target_Target.call(this, properties.concat(Ext_fx_target_Element.PROPERTIES()), events.concat(Ext_fx_target_Element.EVENTS())) || this;
  }

  var _proto = Ext_fx_target_Element.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_target_Target.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_target_Target.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_target_Element;
}(Ext_fx_target_Target);

export { Ext_fx_target_Element as default };