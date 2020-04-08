import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_trigger_Trigger from '../../../Ext/form/trigger/Trigger.js';

var Ext_form_trigger_Component = /*#__PURE__*/function (_Ext_form_trigger_Tri) {
  _inheritsLoose(Ext_form_trigger_Component, _Ext_form_trigger_Tri);

  Ext_form_trigger_Component.PROPERTIES = function PROPERTIES() {
    return ['cls', 'component', 'extraCls', 'focusOnMouseDown', 'handler', 'hidden', 'hideOnReadOnly', 'preventMouseDown', 'repeatClick', 'scope', 'tooltip', 'weight', 'width'];
  };

  Ext_form_trigger_Component.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_trigger_Component.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_trigger_Component.PROPERTIES());
    return Ext_form_trigger_Trigger.getProperties(properties);
  };

  Ext_form_trigger_Component.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_trigger_Component.EVENTS());
    return Ext_form_trigger_Trigger.getEvents(events);
  };

  _createClass(Ext_form_trigger_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_trigger_Tri.observedAttributes;
      Ext_form_trigger_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_trigger_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_trigger_Component(properties, events) {
    return _Ext_form_trigger_Tri.call(this, properties.concat(Ext_form_trigger_Component.PROPERTIES()), events.concat(Ext_form_trigger_Component.EVENTS())) || this;
  }

  var _proto = Ext_form_trigger_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_trigger_Tri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_trigger_Tri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_trigger_Component;
}(Ext_form_trigger_Trigger);

export { Ext_form_trigger_Component as default };