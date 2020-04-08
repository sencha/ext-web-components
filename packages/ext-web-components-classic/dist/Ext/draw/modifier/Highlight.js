import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_modifier_Modifier from '../../../Ext/draw/modifier/Modifier.js';

var Ext_draw_modifier_Highlight = /*#__PURE__*/function (_Ext_draw_modifier_Mo) {
  _inheritsLoose(Ext_draw_modifier_Highlight, _Ext_draw_modifier_Mo);

  Ext_draw_modifier_Highlight.PROPERTIES = function PROPERTIES() {
    return ['enabled', 'listeners', 'lower', 'sprite', 'style', 'upper'];
  };

  Ext_draw_modifier_Highlight.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_modifier_Highlight.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_modifier_Highlight.PROPERTIES());
    return Ext_draw_modifier_Modifier.getProperties(properties);
  };

  Ext_draw_modifier_Highlight.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_modifier_Highlight.EVENTS());
    return Ext_draw_modifier_Modifier.getEvents(events);
  };

  _createClass(Ext_draw_modifier_Highlight, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_modifier_Mo.observedAttributes;
      Ext_draw_modifier_Highlight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_modifier_Highlight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_modifier_Highlight(properties, events) {
    return _Ext_draw_modifier_Mo.call(this, properties.concat(Ext_draw_modifier_Highlight.PROPERTIES()), events.concat(Ext_draw_modifier_Highlight.EVENTS())) || this;
  }

  var _proto = Ext_draw_modifier_Highlight.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_modifier_Mo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_modifier_Mo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_modifier_Highlight;
}(Ext_draw_modifier_Modifier);

export { Ext_draw_modifier_Highlight as default };