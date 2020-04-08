import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_modifier_Modifier from '../../../Ext/draw/modifier/Modifier.js';

var Ext_chart_modifier_Callout = /*#__PURE__*/function (_Ext_draw_modifier_Mo) {
  _inheritsLoose(Ext_chart_modifier_Callout, _Ext_draw_modifier_Mo);

  Ext_chart_modifier_Callout.PROPERTIES = function PROPERTIES() {
    return ['listeners', 'lower', 'sprite', 'upper'];
  };

  Ext_chart_modifier_Callout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_modifier_Callout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_modifier_Callout.PROPERTIES());
    return Ext_draw_modifier_Modifier.getProperties(properties);
  };

  Ext_chart_modifier_Callout.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_modifier_Callout.EVENTS());
    return Ext_draw_modifier_Modifier.getEvents(events);
  };

  _createClass(Ext_chart_modifier_Callout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_modifier_Mo.observedAttributes;
      Ext_chart_modifier_Callout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_modifier_Callout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_modifier_Callout(properties, events) {
    return _Ext_draw_modifier_Mo.call(this, properties.concat(Ext_chart_modifier_Callout.PROPERTIES()), events.concat(Ext_chart_modifier_Callout.EVENTS())) || this;
  }

  var _proto = Ext_chart_modifier_Callout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_modifier_Mo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_modifier_Mo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_modifier_Callout;
}(Ext_draw_modifier_Modifier);

export { Ext_chart_modifier_Callout as default };